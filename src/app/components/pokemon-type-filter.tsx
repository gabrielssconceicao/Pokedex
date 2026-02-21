import { FunnelIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
const pokemonTypes = [
  'Fire',
  'Water',
  'Grass',
  'Electric',
  'Bug',
  'Normal',
  'Psychic',
  'Rock',
  'Ground',
  'Ice',
  'Dragon',
  'Dark',
  'Fairy',
  'Fighting',
  'Ghost',
  'Steel',
  'Poison',
  'Flying',
];

export function PokemonTypeFilter() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex w-32 flex-1 border-0">
        <Button className="bg-primary w-full" size={'sm'}>
          <FunnelIcon className="mr-2 h-3 w-3" />
          Tipagem
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        {pokemonTypes.map((type) => (
          <DropdownMenuCheckboxItem
            key={type}
            onSelect={(event) => event.preventDefault()}
            className="text-xs"
          >
            {type}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
