import { POKEMON_TYPES } from '@/constants/colors';
import { PokemonType } from '@/constants/pokemon-types';

export function getPokemonColors(type: PokemonType) {
  return POKEMON_TYPES[type];
}
