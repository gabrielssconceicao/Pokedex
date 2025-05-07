import { zodResolver } from '@hookform/resolvers/zod';
import { Funnel, MagnifyingGlass, X } from '@phosphor-icons/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

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

const pokemonsFilterSchema = z.object({
  pokemonId: z.string().optional(),
  pokemonName: z.string().optional(),
  itemsPerPage: z.string().optional(),
  pokemonTypes: z.array(z.string()).optional(),
});

type PokemonsFilterSchema = z.infer<typeof pokemonsFilterSchema>;

export function PokemonFilters() {
  const { handleSubmit, reset, control } = useForm<PokemonsFilterSchema>({
    resolver: zodResolver(pokemonsFilterSchema),
    defaultValues: {
      pokemonId: '',
      pokemonName: '',
      itemsPerPage: '20',
      pokemonTypes: [],
    },
  });

  function handleFilter({
    pokemonId,
    pokemonName,
    itemsPerPage,
    pokemonTypes,
  }: PokemonsFilterSchema) {
    console.log({ pokemonId, pokemonName, itemsPerPage, pokemonTypes });
  }

  function resetFilter() {
    reset({
      pokemonId: '',
      pokemonName: '',
      itemsPerPage: '20',
      pokemonTypes: [],
    });
  }

  return (
    <form
      action=""
      className="flex flex-wrap items-center justify-center gap-3 px-5 py-2"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span className="text-sm font-bold">Filtros</span>
      <Controller
        control={control}
        name="pokemonId"
        render={({ field }) => (
          <Input placeholder="Pokemon Id" className="h-8 w-20" {...field} />
        )}
      />
      <Controller
        control={control}
        name="pokemonName"
        render={({ field }) => (
          <Input placeholder="Pokemon Name" className="h-8 flex-1" {...field} />
        )}
      />

      <Controller
        name="pokemonTypes"
        control={control}
        render={({ field: { value, onChange } }) => (
          <DropdownMenu>
            <DropdownMenuTrigger className="border-0">
              <Button className="bg-primary" size={'sm'}>
                <Funnel className="mr-2 h-3 w-3" />
                Tipagem
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col space-y-1">
              {TYPES.map(type => {
                const isChecked = value?.includes(type);
                return (
                  <div className="flex items-center gap-2" key={type}>
                    <Checkbox
                      id={type}
                      name="types"
                      checked={isChecked}
                      onCheckedChange={checked => {
                        if (checked) {
                          onChange([...(value || []), type]);
                        } else {
                          onChange([...(value || []).filter(t => t !== type)]);
                        }
                      }}
                    />
                    <Label htmlFor={type} className="flex-1">
                      {type[0].toUpperCase() + type.slice(1)}
                    </Label>
                  </div>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      />

      <Controller
        control={control}
        name="itemsPerPage"
        render={({ field: { name, value, onChange, disabled } }) => (
          <Select
            defaultValue="20"
            name={name}
            value={value}
            onValueChange={onChange}
            disabled={disabled}
          >
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
        )}
      />
      <Button className="bg-primary" size={'sm'} type="submit">
        <MagnifyingGlass className="mr-2 h-3 w-3" />
        Filtrar
      </Button>
      <Button variant={'outline'} size={'sm'} onClick={resetFilter}>
        <X className="mr-2 h-3 w-3" />
        Limpar Filtros
      </Button>
    </form>
  );
}
