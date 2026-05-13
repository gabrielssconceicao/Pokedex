import { Move, PokemonMove } from '@/interface/pokemon-moves';

export function formatPokemonMove(move: PokemonMove): Move {
  return {
    learn: {
      'level-up': move.level_learned,
      machine: move.machine?.toUpperCase() || null,
      egg: null,
      tutor: null,
    },
    id: move.id,
    name: move.name,
    types: {
      type: move.type,
      competition: move.contest_type,
      category: move.damage_class,
    },
    status: {
      accuracy: move.accuracy,
      power: move.power,
      pp: move.pp,
    },
    description: move.flavor_text_entry,
  };
}
