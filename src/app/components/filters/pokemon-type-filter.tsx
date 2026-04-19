'use client';
import { FunnelIcon } from 'lucide-react';

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
      <DropdownMenuTrigger asChild>
        <button className="bg-primary flex h-9 w-28 flex-1 items-center justify-center gap-3 rounded-md border-0 text-sm font-medium">
          <FunnelIcon className="mr-2 h-3 w-3" />
          Tipagem
        </button>
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
