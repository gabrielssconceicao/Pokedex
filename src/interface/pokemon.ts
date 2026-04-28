import { PokemonType } from '@/constants/pokemon-types';

import { PokemonSprite } from './pokemon-sprite';

export interface Pokemon {
  name: string;
  id: number;
  types: PokemonType[];
  sprites: PokemonSprite;
}
