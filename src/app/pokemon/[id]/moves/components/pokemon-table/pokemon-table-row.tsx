'use client';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { getPokemonColors } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

import { MoveStatusCard } from './move-status-card';
import { BagdeCard } from './type-badge-card';

interface Props {
  name: string;
  level: number;
  types: Array<{ label: string; value: string }>;
  status: Array<{ label: string; value: number | string }>;
  description: string;
}

export function PokemonTableRow({
  name,
  description,
  level,
  status,
  types,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { text, textInverse, border, bgInverse, bg } = getPokemonColors('fire');

  const toggleOpenStatus = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <TableRow
        onClick={toggleOpenStatus}
        className={cn('font-bold', text, bg)}
      >
        <TableCell>
          <Button className="h-6 w-6">
            {isOpen ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
          </Button>
        </TableCell>
        <TableCell className="text-xs">{level}</TableCell>
        <TableCell className="text-center text-xs" colSpan={2}>
          {name}
        </TableCell>
      </TableRow>

      <TableRow className={cn(textInverse, bgInverse)}>
        <TableCell colSpan={5} className="p-0">
          <div
            className={cn(
              'overflow-hidden transition-all duration-300 ease-in-out',
              isOpen
                ? 'max-h-60 translate-y-0 opacity-100'
                : 'max-h-0 -translate-y-2 opacity-0'
            )}
          >
            <div className={cn('space-y-2 px-3 py-2')}>
              <div className="flex flex-row flex-wrap gap-2">
                {Object.values(types).map(({ value, label }) => (
                  <BagdeCard
                    key={`${name}-${label}`}
                    label={label}
                    type={value}
                    textColor={textInverse}
                    borderColor={border}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 justify-center gap-2">
                {Object.values(status).map(({ label, value }) => (
                  <MoveStatusCard
                    key={`${name}-${label}`}
                    label={label}
                    value={value}
                    border={border}
                    text={textInverse}
                  />
                ))}
                <MoveStatusCard
                  label="Description"
                  value={description}
                  gridColumn={3}
                  border={border}
                  text={textInverse}
                />
              </div>
            </div>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
}
