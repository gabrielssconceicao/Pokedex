import { useQuery } from '@tanstack/react-query';

import { getPokemonMoves } from '@/api/get-pokemon-moves';
import { FetchPokemonMove } from '@/interface/fetch-pokemon-moves';
import { LearnMove } from '@/interface/pokemon-moves';
type Props = {
  id: string;
  moves: FetchPokemonMove[];
  learnMethod: LearnMove;
};

export function usePokemonMoves({ id, moves, learnMethod }: Props) {
  return useQuery({
    queryKey: ['pokemon-moves', id, learnMethod],
    queryFn: () => getPokemonMoves({ moves, learnMethod, version: 'red' }),
    enabled: !!id,
  });
}
