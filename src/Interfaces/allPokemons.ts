export interface PokemonsPerPage {
  name: string;
  sprites: PokemonImage;
  types: PokemonTypes[];
  id: number;
  height: number;
  weight: number;
}

interface PokemonImage {
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

export interface PokemonTypes {
  type: {
    name: PokemonTypesNames;
  };
}

type PokemonTypesNames =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';

export enum PokemonTypesColors {
  normal = '#A8A77A',
  fire = '#EE8130',
  water = '#6390F0',
  electric = '#F7D02C',
  grass = '#7AC74C',
  ice = '#96D9D6',
  fighting = '#C22E28',
  poison = '#A33EA1',
  ground = '#E2BF65',
  flying = '#A98FF3',
  psychic = '#F95587',
  bug = '#A6B91A',
  rock = '#B6A136',
  ghost = '#735797',
  dragon = '#6F35FC',
  dark = '#705746',
  steel = '#B7B7CE',
  fairy = '#D685AD',
}
