import { FetchPokemon } from '@/interface/fetch-pokemon';
import { FormatPokemonParams } from '@/interface/format-pokemon';

export function formatPokemon(pokemon: FormatPokemonParams): FetchPokemon {
  return {
    id: pokemon.id,
    name: pokemon.name,
    weight: pokemon.weight,
    height: pokemon.height,
    sprites: {
      front_default: pokemon.sprites.front_default,
      other: pokemon.sprites.other,
    },
    types: pokemon.types.map((t) => t.type.name),
  };
}
