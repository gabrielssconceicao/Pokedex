import { useQuery } from '@tanstack/react-query';

import { getPokemon } from '@/api/get-pokemon';

type Props = {
  pokemon: string;
};
export function usePokemon({ pokemon }: Props) {
  return useQuery({
    queryKey: ['pokemon', pokemon],
    queryFn: () =>
      getPokemon({ pokemon })
        .then((res) => res)
        .catch(() => null),
  });
}
