'use client';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { getPokemonColors } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

import { BagdeCard } from './BagdeCard';
import { MoveStatus } from './MoveStatus';

const move = {
  level: 50,
  name: 'Move 1',
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
};

export function PokemonTableRow() {
  const [isOpen, setIsOpen] = useState(false);
  const { text, bg, border } = getPokemonColors('fire');

  const toggleOpenStatus = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <TableRow onClick={toggleOpenStatus}>
        <TableCell>
          <Button className="h-6 w-6" variant={'outline'}>
            {isOpen ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
          </Button>
        </TableCell>
        <TableCell className="text-xs">{move.level}</TableCell>
        <TableCell className="text-center text-xs" colSpan={2}>
          {move.name}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell colSpan={5}>
          <div
            className={cn(
              'space-y-2 overflow-hidden bg-blue-100 px-1 py-2 transition-all duration-300 ease-in-out',
              isOpen
                ? 'max-h-56 translate-y-0 opacity-100'
                : 'h-0 -translate-y-2 opacity-0'
            )}
          >
            <div className="flex flex-row flex-wrap gap-2">
              <BagdeCard
                label="Type"
                type="Normal"
                textColor={text}
                borderColor={border}
                bgColor={bg}
              />
              <BagdeCard
                label="Competition"
                type="Tought"
                textColor={text}
                borderColor={border}
                bgColor={bg}
              />
              <BagdeCard
                label="Category"
                type="Physical"
                textColor={text}
                borderColor={border}
                bgColor={bg}
              />
            </div>

            <div className="grid grid-cols-3 justify-center gap-2">
              <MoveStatus label="Power" value={50} />
              <MoveStatus label="Accuracy" value={50} />
              <MoveStatus label="PP" value={50} />
              <MoveStatus
                label="Description"
                value={move.description}
                gridColumn={3}
              />
            </div>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
}
