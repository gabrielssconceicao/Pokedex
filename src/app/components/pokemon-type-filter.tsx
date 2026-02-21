'use client';
import { FunnelIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { pokemonTypes } from '@/constants/pokemon-types';

export function PokemonTypeFilter() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex w-32 flex-1 border-0">
        <Button className="bg-primary w-full" size={'sm'}>
          <FunnelIcon className="mr-2 h-3 w-3" />
          Tipagem
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32 sm:w-40">
        {Object.entries(pokemonTypes).map(([key, type]) => (
          <DropdownMenuCheckboxItem
            key={key}
            onSelect={(event) => event.preventDefault()}
            className="text-xs"
          >
            {type.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
