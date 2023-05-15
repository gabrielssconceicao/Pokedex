import { ReactNode } from 'react';
import { AllPokemonsProps } from './allPokemons';

export interface PokemonContextProps {
  allPokemons: AllPokemonsProps[];
  isLoading: boolean;
  actualPage: number;
  totalPages: number;
  prevPage: () => void;
  nextPage: () => void;
  firstPage: () => void;
  lastPage: () => void;
}

export interface PokemonProviderProps {
  children: ReactNode;
}

export interface GetAllPokemonProps {
  name: string;
  url: string;
}
