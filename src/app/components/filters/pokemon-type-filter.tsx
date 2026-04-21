'use client';
import { FunnelIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PokemonType, pokemonTypes } from '@/constants/pokemon-types';

interface PokemonTypeFilterProps {
  value: PokemonType[];
  onChange: (types: PokemonType[]) => void;
}

export function PokemonTypeFilter({ onChange, value }: PokemonTypeFilterProps) {
  function handleToggle(type: PokemonType) {
    const isSelected = value.includes(type);

    if (isSelected) {
      onChange(value.filter((t) => t !== type));
    } else {
      onChange([...value, type]);
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-primary flex h-9 w-28 flex-1 items-center justify-center gap-3 rounded-md border-0 text-sm font-medium">
          <FunnelIcon className="mr-2 h-3 w-3" />
          Tipagem
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32 sm:w-40">
        {Object.keys(pokemonTypes).map((key) => {
          const typedKey = key as PokemonType;

          return (
            <DropdownMenuCheckboxItem
              key={typedKey}
              checked={value.includes(typedKey)}
              onCheckedChange={() => handleToggle(typedKey)}
              onSelect={(event) => event.preventDefault()}
              className="text-xs"
            >
              {key}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
