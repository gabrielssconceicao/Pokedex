import { useQuery } from '@tanstack/react-query';

import { getPokemonSpecies } from '@/api/get-pokemon-species';
import { VersionName } from '@/interface/version-name';

type Props = {
  id: number;
  version: VersionName;
};

export function usePokemonSpecies({ id, version }: Props) {
  return useQuery({
    queryKey: ['pokemon-species', id, version],
    retry: false,
    queryFn: () => getPokemonSpecies({ id, version }),
    enabled: !!id,
  });
}
