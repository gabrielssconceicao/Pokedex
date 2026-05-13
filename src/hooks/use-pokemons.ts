import { useQuery } from '@tanstack/react-query';

import { fetchPokemons } from '@/api/fetch-pokemons';
import { PokemonType } from '@/constants/pokemon-types';
import { QUERY_KEYS } from '@/constants/query-keys';

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
    queryKey: [QUERY_KEYS.POKEMONS, page, perPage, id, name, types.join(',')],
    queryFn: () => fetchPokemons({ pagination, filters }),
  });
}
