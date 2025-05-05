import { api } from '@/lib/axios';

export interface GetPokemonsResponse {
  count: number;
  results: { name: string }[];
}

export type PokemonTypes =
  | 'normal'
  | 'fire'
  | 'fighting'
  | 'water'
  | 'flying'
  | 'grass'
  | 'poison'
  | 'eletric'
  | 'ground'
  | 'psychic'
  | 'rock'
  | 'ice'
  | 'bug'
  | 'dragon'
  | 'ghost'
  | 'dark'
  | 'steel'
  | 'fairy';

export interface GetPokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: PokemonTypes[];
}
interface PokemonResponse extends Omit<GetPokemon, 'types'> {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };

  types: {
    type: {
      name: PokemonTypes;
    };
  }[];
}

export const getPokemons = async () => {
  const res = await api.get<GetPokemonsResponse>('/pokemon?limit=20&offset=0');
  const { count, results } = res.data;

  const pokemons = await Promise.all(
    results.map(async pokemon => {
      const {
        data: { id, name, types, sprites },
      } = await api.get<PokemonResponse>(`/pokemon/${pokemon.name}`);
      return { id, name, sprites, types: types.map(type => type.type.name) };
    })
  );

  return { count, data: pokemons };
};
