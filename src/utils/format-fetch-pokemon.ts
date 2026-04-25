import { PokemonType } from '@/constants/pokemon-types';
import { FetchPokemon } from '@/interface/fetch-pokemon';
import { PokemonSprite } from '@/interface/pokemon-sprite';

export interface FormatFetchPokemonParams {
  id: number;
  name: string;
  sprites: PokemonSprite;
  types: Array<{ type: { name: PokemonType } }>;
}

export function formatFetchPokemon(
  pokemon: FormatFetchPokemonParams
): FetchPokemon {
  return {
    id: pokemon.id,
    name: pokemon.name,
    sprites: {
      front_default: pokemon.sprites.front_default,
      other: pokemon.sprites.other,
    },
    types: pokemon.types.map((t) => t.type.name),
  };
}
