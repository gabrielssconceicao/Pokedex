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
  const [isLoading, setIsLoading] = useState(true);
  const fetchPokemon = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon: GetAllPokemonProps) => {
        return getPokemonData(pokemon.url);
      });
      Promise.all(promises).then((response: AllPokemonsProps[]) =>
        setAllPokemons(response)
      );

      // setAllPokemons(result);
    } catch (error) {
      console.log('Error', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PokemonContext.Provider value={{ allPokemons, isLoading }}>
      {children}
    </PokemonContext.Provider>
  );
}
