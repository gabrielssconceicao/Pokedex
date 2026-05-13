import { useQuery } from '@tanstack/react-query';

import { getPokemonMoves } from '@/api/get-pokemon-moves';
import { QUERY_KEYS } from '@/constants/query-keys';
import { FetchPokemonMove } from '@/interface/fetch-pokemon-moves';
import { LearnMove } from '@/interface/pokemon-moves';
import { VersionName } from '@/interface/version-name';
type Props = {
  id: string;
  moves: FetchPokemonMove[];
  learnMethod: LearnMove;
  version: VersionName;
};

export function usePokemonMoves({ id, moves, learnMethod, version }: Props) {
  return useQuery({
    queryKey: [QUERY_KEYS.MOVES, id, learnMethod, version],
    queryFn: () => getPokemonMoves({ moves, learnMethod, version }),
    enabled: !!id,
  });
}
