import { Funnel, MagnifyingGlass, X } from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TYPES } from '@/interfaces/pokemon-types';

export function PokemonFilters() {
  return (
    <div className="px-5">
      <form className="flex items-center gap-3 px-2 py-2">
        <span className="text-sm font-bold">Filtros</span>
        <Input placeholder="Pokemon Id" className="h-8 w-20" />
        <Input placeholder="Pokemon Name" className="h-8 flex-1" />
        <DropdownMenu>
          <DropdownMenuTrigger className="border-0">
            <Button className="bg-primary" size={'sm'}>
              <Funnel className="mr-2 h-3 w-3" />
              Tipagem
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col space-y-1">
            {TYPES.map(type => (
              <div className="flex items-center gap-2" key={type}>
                <Checkbox id={type} name="types" />
                <Label htmlFor={type} className="flex-1">
                  {type[0].toUpperCase() + type.slice(1)}
                </Label>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Select>
          <SelectTrigger size="sm">
            <SelectValue placeholder="Qtd por Página" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-primary" size={'sm'}>
          <MagnifyingGlass className="mr-2 h-3 w-3" />
          Filtrar
        </Button>
        <Button variant={'outline'} size={'sm'}>
          <X className="mr-2 h-3 w-3" />
          Limpar Filtros
        </Button>
      </form>
    </div>
  );
}
