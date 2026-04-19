import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getPokemonColors } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

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

export function PokemonTable() {
  const { bg, bgInverse, text, textInverse } = getPokemonColors('fire');
  return (
    <Table>
      <TableCaption>A list of pokemon moves</TableCaption>
      <TableHeader>
        <TableRow className={cn('border-b', bgInverse)}>
          <TableHead className="w-6 first:rounded-tl-lg"></TableHead>
          <TableHead
            className={cn(
              'w-8 text-center font-mono text-xs font-bold tracking-wide uppercase',
              textInverse
            )}
          >
            Level
          </TableHead>
          <TableHead
            className={cn(
              'text-center font-mono text-xs font-bold tracking-wide uppercase last:rounded-tr-lg',
              textInverse
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
