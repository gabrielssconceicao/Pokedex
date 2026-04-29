import { PokemonType } from '@/constants/pokemon-types';

import { PokemonSprite } from './pokemon-sprite';

export interface FormatPokemonParams {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: PokemonSprite;
  types: Array<{ type: { name: PokemonType } }>;
}
