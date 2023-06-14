import { Dispatch, ReactNode, SetStateAction } from 'react';
import { PokemonsPerPage } from './allPokemons';

export interface PokemonContextProps {
  pokemonsPerPage: PokemonsPerPage[];

  isLoading: boolean;
  actualPage: number;
  totalPages: number;
  isSearching: boolean;
  setActualPage: Dispatch<SetStateAction<number>>;

  inputSearch: (value: string) => void;
}

export interface PokemonProviderProps {
  children: ReactNode;
}

export interface GetAllPokemonProps {
  name: string;
  url: string;
}
