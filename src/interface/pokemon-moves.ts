export type FetchPokemonMove = {
  move: { url: string };
  version_group_details: {
    move_learn_method: { name: string };
    version_group: { name: string };
  };
};

export type LearnMove = 'level-up' | 'machine' | 'egg' | 'tutor';
