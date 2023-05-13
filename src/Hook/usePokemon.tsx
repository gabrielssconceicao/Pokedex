import { useContext } from 'react';
import { PokemonContext } from '../Context';

export function usePokemon() {
  return useContext(PokemonContext);
}
