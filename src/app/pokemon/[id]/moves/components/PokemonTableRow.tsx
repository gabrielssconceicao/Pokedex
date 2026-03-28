'use client';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';

export function PokemonTableRow() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <TableRow>
        <TableCell>
          <Button className="w-6" variant={'outline'}>
            {isOpen ? <MinusIcon size={20} /> : <PlusIcon />}
          </Button>
        </TableCell>
        <TableCell className="text-xs">Level/HM</TableCell>
        <TableCell className="text-center text-xs" colSpan={2}>
          Move 1
        </TableCell>
        <TableCell className="w-6 text-right text-xs">10</TableCell>
      </TableRow>
      {isOpen && (
        <TableRow>
          <TableCell colSpan={5}>
            <div className="bg-pink-400">1</div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
