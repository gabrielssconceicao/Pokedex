'use client';
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
import { LearnMove } from '@/interface/pokemon-moves';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

import { PokemonTableRow } from './pokemon-table-row';

const moves = Array.from({ length: 10 }).map((_, index) => ({
  level: index + 1,
  name: `Move ${index + 1}`,
  types: [
    {
      label: 'Type',
      value: 'Normal',
    },
    {
      label: 'Competition',
      value: 'Tought',
    },
    {
      label: 'Category',
      value: 'Physical',
    },
  ],
  status: [
    {
      label: 'Power',
      value: 100,
    },
    {
      label: 'Accuracy',
      value: 100,
    },
    {
      label: 'PP',
      value: 50,
    },
  ],
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatibus. Lorem ipsum dolor sit amet ',
}));

type PokemonTableProps = {
  pokemonId: string;
  query: LearnMove;
};

export function PokemonTable({ query, pokemonId }: PokemonTableProps) {
  const { data: pokemon } = usePokemon({ pokemon: pokemonId });
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
        {moves.map((move) => (
          <PokemonTableRow key={move.name} {...move} />
        ))}
      </TableBody>
    </Table>
  );
}
