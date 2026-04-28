'use client';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { getPokemon } from '@/api/get-pokemon';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

type Props = {
  pokemon: string;
};
export function usePokemon({ pokemon }: Props) {
  const router = useRouter();
  return useQuery({
    queryKey: ['pokemon', pokemon],
    retry: false,
    queryFn: async () => {
      try {
        const res = await getPokemon({ pokemon });

        return {
          pokemon: res,
          typeColors: getPokemonColors(res.types[0]),
        };
      } catch {
        router.push('not-found');
      }
    },
  });
}
