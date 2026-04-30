import { FormatPokemonParams } from '@/interface/format-pokemon';
import { Pokemon } from '@/interface/pokemon';

export function formatPokemon(pokemon: FormatPokemonParams): Pokemon {
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
    stats: pokemon.stats.map((s) => ({
      base_stat: s.base_stat,
      name: s.stat.name,
    })),
  };
}
