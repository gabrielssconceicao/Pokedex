import { zodResolver } from '@hookform/resolvers/zod';
import { Funnel, MagnifyingGlass, X } from '@phosphor-icons/react';
import { Controller, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';
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
  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPageQuery = searchParams.get('itemsPerPage');

  const pokemonTypesQuery = searchParams.get('pokemonTypes')?.split('+');

  const pokemonNameQuery = searchParams.get('pokemonName');

  const pokemonIdQuery = searchParams.get('pokemonId');

  const { handleSubmit, reset, control } = useForm<PokemonsFilterSchema>({
    resolver: zodResolver(pokemonsFilterSchema),
    defaultValues: {
      pokemonId: pokemonIdQuery || '',
      pokemonName: pokemonNameQuery || '',
      itemsPerPage: itemsPerPageQuery || '20',
      pokemonTypes: pokemonTypesQuery || [],
    },
  });

  function handleFilter({
    pokemonId,
    pokemonName,
    itemsPerPage,
    pokemonTypes,
  }: PokemonsFilterSchema) {
    if (pokemonId && pokemonId !== '' && isNaN(parseInt(pokemonId))) return;
    setSearchParams(state => {
      if (itemsPerPage) state.set('itemsPerPage', itemsPerPage);
      state.set('page', '1');
      if (pokemonId) state.set('pokemonId', pokemonId);
      if (pokemonName) state.set('pokemonName', pokemonName);
      if (pokemonTypes?.length)
        state.set('pokemonTypes', pokemonTypes.join('+'));
      return state;
    });
  }

  function resetFilter() {
    setSearchParams(state => {
      state.delete('pokemonId');
      state.delete('pokemonName');
      state.delete('pokemonTypes');
      state.set('itemsPerPage', '20');
      state.set('page', '1');
      return state;
    });
    reset({
      pokemonId: '',
      pokemonName: '',
      itemsPerPage: '20',
      pokemonTypes: [],
    });
  }

  return (
    <form
      className="grid-layout grid gap-2 px-5 py-2 md:flex md:flex-wrap md:items-center md:justify-center md:gap-3"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span className="grid-span-text text-center text-sm font-bold">
        Filtros
      </span>
      <Controller
        control={control}
        name="pokemonId"
        render={({ field }) => (
          <Input
            placeholder="Pokemon Id"
            className="grid-pokemon-id h-8 md:w-20"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="pokemonName"
        render={({ field }) => (
          <Input
            placeholder="Pokemon Name"
            className="grid-pokemon-name h-8 md:flex-1"
            {...field}
          />
        )}
      />

      <Controller
        name="pokemonTypes"
        control={control}
        render={({ field: { value, onChange } }) => (
          <DropdownMenu>
            <DropdownMenuTrigger className="grid-pokemon-filter border-0">
              <Button className="bg-primary w-full" size={'sm'}>
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
            <SelectTrigger
              size="sm"
              className="grid-pokemon-qtd-per-pages w-full md:w-fit"
            >
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
      <Button className="bg-primary grid-search-btn" size={'sm'} type="submit">
        <MagnifyingGlass className="mr-2 h-3 w-3" />
        Filtrar
      </Button>
      <Button
        className="grid-clear-filter-btn"
        variant={'outline'}
        size={'sm'}
        onClick={resetFilter}
      >
        <X className="mr-2 h-3 w-3" />
        Limpar Filtros
      </Button>
    </form>
  );
}
