import { useQuery } from '@tanstack/react-query';

import { getPokemonAbilities } from '@/api/get-pokemon-abilities';
import { Pokemon } from '@/interface/pokemon';

type Props = {
  abilities: Pokemon['abilities'];
};

export function usePokemomAbilities({ abilities }: Props) {
  return useQuery({
    queryKey: [
      'pokemon-abilities',
      abilities.map((a) => a.abilityUrl).join(','),
    ],
    retry: false,
    queryFn: () => getPokemonAbilities({ abilities }),
    enabled: !!abilities,
  });
}
