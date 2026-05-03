import { PokemonType } from '@/constants/pokemon-types';

import { PokemonSprite } from './pokemon-sprite';

export interface FormatPokemonParams {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: PokemonSprite;
  abilities: Array<{ ability: { url: string }; is_hidden: boolean }>;
  types: Array<{ type: { name: PokemonType; url: string } }>;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
}
