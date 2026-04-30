import { useQuery } from '@tanstack/react-query';

import { getPokemonSpecies } from '@/api/get-pokemon-species';

type Props = {
  id: number;
};

export function usePokemonSpecies({ id }: Props) {
  return useQuery({
    queryKey: ['pokemon-species', id, 'version'],
    retry: false,
    queryFn: () => getPokemonSpecies({ id }),
    enabled: !!id,
  });
}
