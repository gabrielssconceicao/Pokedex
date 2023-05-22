import { createContext, useCallback, useEffect, useState } from 'react';
import {
  GetAllPokemonProps,
  PokemonContextProps,
  PokemonProviderProps,
} from '../Interfaces/pokemonContext';
import { AllPokemonsProps } from '../Interfaces/allPokemons';
import { getPokemonData, getPokemons } from '../api';

export const PokemonContext = createContext({} as PokemonContextProps);

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [allPokemons, setAllPokemons] = useState<AllPokemonsProps[]>([]);
  const [filterPokemons, setFilterPokemons] = useState<AllPokemonsProps[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [actualPage, setActualPage] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
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
        console.log('Error');
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

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

  useEffect(() => {
    const getPokemonToFilter = async () => {
      try {
        const data = await getPokemons(10000, 0);
        const promises = data.results.map(
          async (pokemon: GetAllPokemonProps) => {
            return getPokemonData(pokemon.url);
          }
        );
        Promise.all(promises).then((response: AllPokemonsProps[]) =>
          setFilterPokemons(response)
        );
      } catch (err) {
        console.log('Error');
      }
    };
    fetchPokemon(limitPokemonPerPage, limitPokemonPerPage * actualPage);
    getPokemonToFilter();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPage]);

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
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
