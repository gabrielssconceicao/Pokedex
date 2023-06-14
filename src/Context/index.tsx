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
  const [filterPokemons, setFilterPokemons] = useState<PokemonsPerPage[]>([]);

  const [totalPages, setTotalPages] = useState(0);
  const [actualPage, setActualPage] = useState(0);
  const limitPokemonPerPage = 25;
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  /*
  const fetchPokemon = useCallback(
    async (limit = limitPokemonPerPage, offset = 0) => {
      try {
        setIsLoading(true);
        const data = await getPokemons(limit, offset);
        setTotalPages(Math.ceil(data.count / limitPokemonPerPage));
        const promises = data.results.map(
          async (pokemon: GetAllPokemonProps) => {
            return getPokemonData(pokemon.url);
          }
        );
        Promise.all(promises).then((response: AllPokemonsProps[]) =>
          setAllPokemons(response)
        );

        // setAllPokemons(result);
      } catch (error) {
        console.log('Error');
      } finally {
        setIsLoading(false);
      }
    },
    []
  );
  */

  const inputSearch = async (value: string) => {
    if (!value) {
      fetchPokemon(limitPokemonPerPage, limitPokemonPerPage * actualPage);
      setIsSearching(false);
      return;
    }

    const filteredPokemons = filterPokemons.filter(
      (poke) => poke.id.toString() === value || poke.name.includes(value)
    );

    if (!filteredPokemons.length) {
      fetchPokemon(limitPokemonPerPage, limitPokemonPerPage * actualPage);
      return;
    }
    setAllPokemons(filteredPokemons);
  };

  const getPokemonsPerPage = async (pag: number, limit: number) => {
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

      type PromiseAllSettle = {
        status: 'fulfilled' | 'rejected';
        value: PokemonsPerPage;
      };
      Promise.allSettled(promises).then((promise) => {
        // eslint-disable-next-line array-callback-return
        const promiseValue = promise.map(
          (prom: PromiseAllSettle | PromiseRejectedResult) => {
            if (prom.status === 'fulfilled') {
              return prom.value;
            }
          }
        );

        if (promiseValue.every((el) => el !== undefined)) {
          setPokemonsPerPage(promiseValue);
        }

        setIsLoading(false);
      });
    } catch (error) {
      console.log('Erro Pkm per page');
    }
  };

  /*
  const getAllPokemons = async (pag: number, limit: number) => {
    const p = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const { count } = await p.json();

    const data = await getPokemons(count, 0);
    const promises = data.results.map(async (pokemon: GetAllPokemonProps) => {
      return getPokemonData(pokemon.url);
    });

    Promise.allSettled(promises)
      .then((result) => result)
      .then((result) => {
        const d = result.map((res) => res.value);
        setFilterPokemons(d);
      });
  };
  */
  useEffect(() => {
    getPokemonsPerPage(actualPage, limitPokemonPerPage);
  }, [actualPage]);

  return (
    <PokemonContext.Provider
      value={{
        pokemonsPerPage,
        isLoading,
        totalPages,
        actualPage,
        isSearching,
        setActualPage,
        inputSearch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
