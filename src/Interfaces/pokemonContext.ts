import { Dispatch, ReactNode, SetStateAction } from 'react';
import { AllPokemonsProps } from './allPokemons';

export interface PokemonContextProps {
  allPokemons: AllPokemonsProps[];
  isLoading: boolean;
  actualPage: number;
  totalPages: number;
  isSearching: boolean;
  setActualPage: Dispatch<SetStateAction<number>>;

  inputSearch: (value: string, setSearch?: boolean) => void;
}

export interface PokemonProviderProps {
  children: ReactNode;
}

export interface GetAllPokemonProps {
  name: string;
  url: string;
}
