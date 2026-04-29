import { PokemonType } from '@/constants/pokemon-types';

import { PokemonSprite } from './pokemon-sprite';

export type FetchPokemon = {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: PokemonType[];
  sprites: PokemonSprite;
};
