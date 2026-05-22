import { useQuery } from '@tanstack/react-query';

import { getPokemonSpecies } from '@/api/get-pokemon-species';
import { QUERY_KEYS } from '@/constants/query-keys';
import { VersionName } from '@/interface/version-name';

type Props = {
  id: number;
  version?: VersionName;
};

export function usePokemonSpecies({ id, version = 'red' }: Props) {
  return useQuery({
    queryKey: [QUERY_KEYS.SPECIES, id, version],
    retry: false,
    queryFn: () => getPokemonSpecies({ id, version }),
    enabled: !!id,
  });
}
