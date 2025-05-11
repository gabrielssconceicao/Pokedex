import { PokemonTypes } from '@/interfaces/pokemon-types';
import { api } from '@/lib/axios';

import { getFilteredPokemons } from './get-filtered-pokemons';

export interface GetPokemonsResponse {
  count: number;
  results: { name: string }[];
}

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
  types: {
    type: {
      name: PokemonTypes;
    };
  }[];
}

export interface GetPokemonsParams {
  limit: number;
  offset: number;
  filters: {
    name: string;
    id: number;
    types: PokemonTypes[];
  };
}

export async function getPokemons({
  limit,
  offset,
  filters,
}: GetPokemonsParams) {
  if (!!filters.name || !!filters.id || filters.types.length) {
    getFilteredPokemons({ limit, offset, filters });
  }

  const res = await api.get<GetPokemonsResponse>(
    `/pokemon?limit=${limit}&offset=${offset}`
  );
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
}
