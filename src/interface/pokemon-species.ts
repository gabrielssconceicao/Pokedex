import { Pokemon } from './pokemon';
import { EvolutionStep } from './pokemon-evolution';

export interface EggGroup {
  id: number;
  name: string;
  pokemon_species: Array<{ name: string }>;
}

export interface PokemonSpecies {
  flavor_text: string;
  varieties: Pokemon[];
  egg_groups: Array<{ id: number; name: string; pokemons: Pokemon[] }>;
  evolution_chain: EvolutionStep | null;
}
