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
  // const [filterPokemons, setFilterPokemons] = useState<PokemonsPerPage[]>([]);

  const [totalPages, setTotalPages] = useState(0);
  const [actualPage, setActualPage] = useState(0);
  const [actualSearchPage, setActualSearchPage] = useState(0);
  const limitPokemonPerPage = 25;
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const inputSearch = async (value: string) => {
    if (!value) {
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    setIsLoading(true);

    const data = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0'
    );
    const { results } = await data.json();
    const filteredPokemons: GetAllPokemonProps[] = results.filter(
      // eslint-disable-next-line array-callback-return
      (result: GetAllPokemonProps) => {
        const id = result.url
          .split('https://pokeapi.co/api/v2/pokemon/')[1]
          .slice(0, -1)
          .toString();
        if (
          result.name.includes(value.toLowerCase()) ||
          id === value.toString()
        ) {
          return result;
        }
      }
    );
    const filteredPokemonsUrl = filteredPokemons.map((poke) =>
      getPokemonData(poke.url)
    );
    try {
      Promise.allSettled(filteredPokemonsUrl).then((promises) => {
        const promisesFulfilled = promises.map((promise) => {
          if (promise.status === 'fulfilled') return promise.value;
        });

        setPokemonsPerPage(promisesFulfilled);

        const totPage = Math.ceil(
          promisesFulfilled.length / limitPokemonPerPage
        );
        setActualSearchPage(0);
        setTotalPages(totPage);

        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

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

        setIsLoading(false);
      });
    } catch (error) {
      console.log('Erro Pkm per page');
    }
  }, []);

  useEffect(() => {
    if (isSearching) {
      const prevPoke = [...pokemonsPerPage];
      const newPoke = prevPoke.slice(
        actualSearchPage,
        limitPokemonPerPage * (actualSearchPage + 1)
      );
      setPokemonsPerPage(newPoke);
    } else {
      getPokemonsPerPage(actualPage, limitPokemonPerPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPage, getPokemonsPerPage, isSearching, actualSearchPage]);

  return (
    <PokemonContext.Provider
      value={{
        pokemonsPerPage,
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
