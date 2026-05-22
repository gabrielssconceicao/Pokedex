import { Pokemon } from './pokemon';

export interface EvolutionTrigger {
  name: string;
  url: string;
}

export interface EvolutionItem {
  name: string;
  url: string;
}

export interface EvolutionDetails {
  trigger: EvolutionTrigger;
  min_level: number | null;
  min_happiness: number | null;
  item: EvolutionItem | null;
  known_move_type: {
    name: string;
  } | null;
  time_of_day: string | null;
}

export interface Chain {
  species: {
    name: string;
    url: string;
  };
  is_baby: boolean;
  evolution_details: EvolutionDetails[];
  evolves_to: Chain[];
}

export interface EvolutionChainResponse {
  id: number;
  baby_trigger_item: EvolutionItem | null;
  chain: Chain;
}

export interface EvolutionStep {
  pokemon: Pokemon;
  evolve: string | null;
  children: EvolutionStep[];
}
