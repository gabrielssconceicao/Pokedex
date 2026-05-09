'use client';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PokemonType } from '@/constants/pokemon-types';
import { usePokemon } from '@/hooks/use-pokemon';
import { usePokemonMoves } from '@/hooks/use-pokemon-moves';
import { LearnMove } from '@/interface/pokemon-moves';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

import { PokemonTableRow } from './pokemon-table-row';
import { TableRowSkeleton } from './table-row-skeleton';

type PokemonTableProps = {
  pokemonId: string;
  query: LearnMove;
};

export function PokemonTable({ query, pokemonId }: PokemonTableProps) {
  const { data: pokemon } = usePokemon({ pokemon: pokemonId });
  const { data: moves, isLoading } = usePokemonMoves({
    id: pokemonId,
    learnMethod: query,
    moves: pokemon?.moves,
  });

  const { bg, text } = getPokemonColors(pokemon?.types[0] as PokemonType);
  return (
    <Table>
      <TableCaption>A list of pokemon moves</TableCaption>
      <TableHeader>
        <TableRow className={cn('border-b', bg.inverse)}>
          <TableHead className="w-6 first:rounded-tl-lg"></TableHead>
          <TableHead
            className={cn(
              'w-8 text-center font-mono text-xs font-bold tracking-wide uppercase',
              text.inverse
            )}
          >
            {query}
          </TableHead>
          <TableHead
            className={cn(
              'text-center font-mono text-xs font-bold tracking-wide uppercase last:rounded-tr-lg',
              text.inverse
            )}
          >
            Name
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {moves &&
          !isLoading &&
          moves.map((move) => (
            <PokemonTableRow
              key={move.id}
              move={move}
              learnMethod={query}
              bgColor={bg}
              textColor={text}
            />
          ))}
        {isLoading && <TableRowSkeleton />}
      </TableBody>
    </Table>
  );
}
