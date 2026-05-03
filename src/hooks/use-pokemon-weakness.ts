import { useQuery } from '@tanstack/react-query';

import { getPokemonWeakness } from '@/api/get-pokemon-weakness';

type Props = {
  id: number;
  types: number[];
};

export function usePokemonWeakness({ types, id }: Props) {
  return useQuery({
    queryKey: ['pokemon-weakness', id],
    retry: false,
    queryFn: () => getPokemonWeakness({ types }),
    enabled: !!id,
  });
}
