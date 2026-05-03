import { PokemonType } from '@/constants/pokemon-types';

export interface FetchPokemonTypeWeakness {
  damage_relations: {
    double_damage_from: Array<{ name: PokemonType }>;
    double_damage_to: Array<{ name: PokemonType }>;
    half_damage_from: Array<{ name: PokemonType }>;
    half_damage_to: Array<{ name: PokemonType }>;
    no_damage_from: Array<{ name: PokemonType }>;
    no_damage_to: Array<{ name: PokemonType }>;
  };
}
