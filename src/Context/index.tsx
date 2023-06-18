import { createContext, useCallback, useEffect, useState } from 'react';
import {
  GetAllPokemonProps,
  PokemonContextProps,
  PokemonProviderProps,
} from '../Interfaces/pokemonContext';
import { PokemonsPerPage } from '../Interfaces/allPokemons';
import { getPokemonData } from '../api';

export const PokemonContext = createContext({} as PokemonContextProps);

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemonsPerPage, setPokemonsPerPage] = useState<PokemonsPerPage[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonsPerPage[]>(
    []
  );
  const [AllFilteredPokemons, setAllFilteredPokemons] = useState<
    PokemonsPerPage[]
  >([]);

  const [totalPages, setTotalPages] = useState(0);
  const [actualPage, setActualPage] = useState(0);
  const [actualSearchPage, setActualSearchPage] = useState(0);
  const limitPokemonPerPage = 25;
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const getPokemonsPerPage = useCallback(async (pag: number, limit: number) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${25 * pag}`
      );

      const { results, count } = await response.json();

      const promises = results.map((result: GetAllPokemonProps) =>
        getPokemonData(result.url)
      );

      setTotalPages(Math.ceil(count / limitPokemonPerPage));

      Promise.allSettled(promises).then((promise) => {
        const promiseValue = promise.map((prom) => {
          if (prom.status === 'fulfilled') {
            return prom.value;
          }
        });
        if (promiseValue.every((el) => el !== undefined)) {
          setPokemonsPerPage(promiseValue);
        }
      });
      setIsLoading(false);
    } catch (error) {
      console.log('Erro Pkm per page');
    }
  }, []);

  const inputSearch = async (value: string) => {
    if (!value) {
      setIsSearching(false);
      getPokemonsPerPage(actualPage, limitPokemonPerPage);
      return;
    }

    setIsSearching(true);
    setIsLoading(true);
    setAllFilteredPokemons([]);
    setFilteredPokemons([]);
    const data = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0'
    );
    const { results } = await data.json();
    const filteredPokemonsResponse: GetAllPokemonProps[] = results.filter(
      // eslint-disable-next-line array-callback-return
      (result: GetAllPokemonProps) => {
        const id = result.url
          .split('https://pokeapi.co/api/v2/pokemon/')[1]
          .slice(0, -1)
          .toString();
        if (result.name.includes(value.toLowerCase()) || id.includes(value)) {
          return result;
        }
      }
    );
    const filteredPokemonsUrl = filteredPokemonsResponse.map((poke) =>
      getPokemonData(poke.url)
    );
    try {
      Promise.allSettled(filteredPokemonsUrl).then((promises) => {
        const promisesFulfilled = promises.map((promise) => {
          if (promise.status === 'fulfilled') return promise.value;
        });

        const totPage = Math.ceil(
          promisesFulfilled.length / limitPokemonPerPage
        );
        setActualSearchPage(0);
        setTotalPages(totPage);
        setAllFilteredPokemons(promisesFulfilled);
        if (AllFilteredPokemons.length > 0) {
          setIsLoading(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonsPerPage(actualPage, limitPokemonPerPage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPage, getPokemonsPerPage]);

  useEffect(() => {
    if (isSearching && AllFilteredPokemons.length > 0) {
      setIsLoading(false);
      const prevPoke = [...AllFilteredPokemons];
      const newPoke = prevPoke.slice(
        actualSearchPage * 25,
        limitPokemonPerPage * (actualSearchPage + 1)
      );
      setFilteredPokemons(newPoke);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearching, actualSearchPage, AllFilteredPokemons]);
  return (
    <PokemonContext.Provider
      value={{
        pokemonsPerPage,
        filteredPokemons,
        isLoading,
        totalPages,
        actualPage,
        actualSearchPage,
        isSearching,
        setActualPage,
        setActualSearchPage,
        inputSearch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
