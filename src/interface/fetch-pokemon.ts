import { PokemonType } from '@/constants/pokemon-types';

import { PokemonSprite } from './pokemon-sprite';

export type FetchPokemon = {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: PokemonSprite;
};
