import { PokemonType } from '@/constants/pokemon-types';

import { PokemonSprite } from './pokemon-sprite';

export interface FormatPokemonParams {
  id: number;
  name: string;
  sprites: PokemonSprite;
  types: Array<{ type: { name: PokemonType } }>;
}
