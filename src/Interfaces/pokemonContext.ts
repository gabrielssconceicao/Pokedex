import { ReactNode } from 'react';
import { AllPokemonsProps } from './allPokemons';

export interface PokemonContextProps {
  allPokemons: AllPokemonsProps[];
  isLoading: boolean;
}

export interface PokemonProviderProps {
  children: ReactNode;
}

export interface GetAllPokemonProps {
  name: string;
  url: string;
}
