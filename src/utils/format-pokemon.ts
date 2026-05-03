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
    typesId: pokemon.types.map((t) =>
      Number(t.type.url.split('/').filter(Boolean).pop())
    ),
    stats: pokemon.stats.map((s) => ({
      base_stat: s.base_stat,
      name: s.stat.name,
    })),
    abilities: pokemon.abilities.map((a) => ({
      abilityUrl: a.ability.url,
      is_hidden: a.is_hidden,
    })),
  };
}
