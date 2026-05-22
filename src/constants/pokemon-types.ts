import { POKEMON_TYPES } from './colors';

export const pokemonTypes = Object.keys(POKEMON_TYPES) as PokemonType[];
export type PokemonType = keyof typeof POKEMON_TYPES;
