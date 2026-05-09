'use client';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { LearnMove, Move } from '@/interface/pokemon-moves';
import { cn } from '@/lib/utils';
import { getColor } from '@/utils/get-pokemon-colors';

import { MoveStatusCard } from './move-status-card';
import { BagdeCard } from './type-badge-card';

interface Props {
  move: Move;
  learnMethod: LearnMove;
  bgColor: { inverse: string; default: string };
  textColor: { inverse: string; default: string };
}

export function PokemonTableRow({
  move,
  learnMethod,
  bgColor,
  textColor,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenStatus = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <TableRow
        onClick={toggleOpenStatus}
        className={cn(
          'font-mono font-bold hover:bg-white/30',
          textColor.default,
          bgColor.default
        )}
      >
        <TableCell>
          <Button
            className={cn('h-6 w-6', textColor.inverse, bgColor.inverse)}
            variant={'outline'}
          >
            {isOpen ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
          </Button>
        </TableCell>
        <TableCell className="text-center text-xs">
          {move.learn[learnMethod]}
        </TableCell>
        <TableCell className="text-center text-sm tracking-wide" colSpan={2}>
          {move.name.split('-').join(' ')}
        </TableCell>
      </TableRow>

      <TableRow
        className={cn(
          'hover:bg-transparent',
          textColor.inverse,
          bgColor.inverse
        )}
      >
        <TableCell colSpan={5} className={'bg-accent-foreground/45 p-0'}>
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
                {Object.entries(move.types).map(([key, value]) => (
                  <BagdeCard
                    key={key}
                    label={key}
                    type={value}
                    textColor={getColor(key, value).text.inverse}
                    borderColor={getColor(key, value).border}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 justify-center gap-2">
                {Object.entries(move.status).map(([key, value]) => (
                  <MoveStatusCard
                    key={key}
                    label={key}
                    value={value}
                    text={textColor.inverse}
                  />
                ))}
                <MoveStatusCard
                  label="Description"
                  value={
                    move.description || 'This move does not have a description'
                  }
                  gridColumn={3}
                  text={textColor.inverse}
                />
              </div>
            </div>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
}
