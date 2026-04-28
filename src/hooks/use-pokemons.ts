import { useQuery } from '@tanstack/react-query';

import { fetchPokemons } from '@/api/fetch-pokemons';
import { PokemonType } from '@/constants/pokemon-types';

export type PokemonFilters = {
  id?: number;
  name?: string;
  page: number;
  perPage: number;
  types: PokemonType[];
};
export function usePokemons({
  page,
  perPage,
  types,
  id,
  name,
}: PokemonFilters) {
  const pagination = {
    limit: perPage,
    page,
  };
  const filters = {
    id,
    name,
    types,
  };
  return useQuery({
    queryKey: ['pokemon-fetch', page, perPage, id, name, types.join(',')],
    queryFn: () => fetchPokemons({ pagination, filters }),
  });
}
