import { createContext, useCallback, useEffect, useState } from 'react';
import {
  GetAllPokemonProps,
  PokemonContextProps,
  PokemonProviderProps,
} from '../Interfaces/pokemonContext';
import { AllPokemonsProps } from '../Interfaces/allPokemons';
import { getPokemonData, getPokemons, searchPokemon } from '../api';

export const PokemonContext = createContext({} as PokemonContextProps);

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [allPokemons, setAllPokemons] = useState<AllPokemonsProps[]>([]);
  const [filterPokemons, setFilterPokemons] = useState<AllPokemonsProps[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [actualPage, setActualPage] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const limitPokemonPerPage = 25;
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
        console.log('Error', error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const nextPage = (): void => {
    if (actualPage > totalPages) return;
    setActualPage((prev) => prev + 1);
  };

  const lastPage = (): void => setActualPage(totalPages - 1);

  const prevPage = (): void => {
    if (actualPage < 1) return;
    setActualPage((prev) => prev - 1);
  };

  const firstPage = (): void => setActualPage(0);

  const inputSearch = async (value: string) => {
    try {
      setIsLoading(true);
      const data = await getPokemons(10000, 0);

      const promises = data.results.map(async (pokemon: GetAllPokemonProps) => {
        return getPokemonData(pokemon.url);
      });
      Promise.all(promises).then((response: AllPokemonsProps[]) =>
        setFilterPokemons(response)
      );
      const filteredPokemons = filterPokemons.filter(
        (poke) => poke.id.toString() === value || poke.name.includes(value)
      );
      setAllPokemons(filteredPokemons);

      setIsLoading(false);
    } catch {
      fetchPokemon(limitPokemonPerPage, limitPokemonPerPage * actualPage);
    }
  };

  useEffect(() => {
    fetchPokemon(limitPokemonPerPage, limitPokemonPerPage * actualPage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPage]);

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        isLoading,
        totalPages,
        actualPage,
        nextPage,
        prevPage,
        firstPage,
        lastPage,
        inputSearch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
