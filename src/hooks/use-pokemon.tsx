'use client';
import { useQuery } from '@tanstack/react-query';

import { getPokemon } from '@/api/get-pokemon';
import { QUERY_KEYS } from '@/constants/query-keys';

type Props = {
  pokemon: string;
};
export function usePokemon({ pokemon }: Props) {
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON, pokemon],
    retry: false,
    queryFn: async () => getPokemon({ pokemon }),
  });
}
