import { useQuery } from '@tanstack/react-query';

import { getPokemonAbilities } from '@/api/get-pokemon-abilities';
import { QUERY_KEYS } from '@/constants/query-keys';
import { Pokemon } from '@/interface/pokemon';

type Props = {
  abilities: Pokemon['abilities'];
};

export function usePokemomAbilities({ abilities }: Props) {
  return useQuery({
    queryKey: [
      QUERY_KEYS.ABILITIES,
      abilities.map((a) => a.abilityUrl).join(','),
    ],
    retry: false,
    queryFn: () => getPokemonAbilities({ abilities }),
    enabled: !!abilities,
  });
}
