export interface PokemonSprite {
  front_default: string;
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
  versions: {
    'generation-v': {
      'black-white': {
        animated: { front_default: string };
      };
    };
  };
}
