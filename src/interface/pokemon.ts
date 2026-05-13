import { PokemonType } from '@/constants/pokemon-types';

import { FetchPokemonMove } from './fetch-pokemon-moves';
import { PokemonSprite } from './pokemon-sprite';

export interface Pokemon {
  name: string;
  id: number;
  weight: number;
  height: number;
  types: PokemonType[];
  typesId: number[];
  sprites: PokemonSprite;
  stats: Array<{ base_stat: number; name: string }>;
  abilities: Array<{ abilityUrl: string; is_hidden: boolean }>;
  moves: FetchPokemonMove[];
}
