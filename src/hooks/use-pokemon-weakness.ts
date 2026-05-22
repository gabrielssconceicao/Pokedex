import { useQuery } from '@tanstack/react-query';

import { getPokemonWeakness } from '@/api/get-pokemon-weakness';
import { QUERY_KEYS } from '@/constants/query-keys';

type Props = {
  id: number;
  types: number[];
};

export function usePokemonWeakness({ types, id }: Props) {
  return useQuery({
    queryKey: [QUERY_KEYS.WEAKNESS, id],
    retry: false,
    queryFn: () => getPokemonWeakness({ types }),
    enabled: !!id,
  });
}
