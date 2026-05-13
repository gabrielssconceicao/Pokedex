'use client';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { getPokemon } from '@/api/get-pokemon';
import { QUERY_KEYS } from '@/constants/query-keys';

type Props = {
  pokemon: string;
};
export function usePokemon({ pokemon }: Props) {
  const router = useRouter();
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON, pokemon],
    retry: false,
    queryFn: async () => {
      try {
        const res = await getPokemon({ pokemon });

        return res;
      } catch {
        router.push('not-found');
      }
    },
  });
}
