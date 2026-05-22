import { LearnMove } from './pokemon-moves';

export type FetchPokemonMove = {
  move: { url: string };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: { name: LearnMove };
    version_group: { name: string };
  }[];
};
