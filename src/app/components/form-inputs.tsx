'use client';

import { SelectItem } from '@radix-ui/react-select';
import { FunnelIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

export function FormInput() {
  const form = useForm();
  return (
    <section className="px-2 py-3">
      <Form {...form}>
        <form action="" className="flex flex-col gap-3" autoComplete="off">
          <div className="flex flex-row gap-2">
            <FormField
              name="pokemonId"
              render={({ field }) => (
                <FormItem className="w-20">
                  <FormControl>
                    <Input {...field} placeholder="ID" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="pokemonName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input {...field} placeholder="Nome do Pokemon" />
                  </FormControl>
                </FormItem>
              )}
            />

            <Controller
              name="pokemonType"
              render={({ field }) => (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex w-48 border-0">
                    <Button className="bg-primary w-full" size={'sm'}>
                      <FunnelIcon className="mr-2 h-3 w-3" />
                      Tipagem
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    {pokemonTypes.map((type) => (
                      <DropdownMenuCheckboxItem
                        key={type}
                        checked
                        onSelect={(event) => event.preventDefault()}
                        className="text-xs"
                      >
                        {type}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            />
            <Controller
              name="itemsPerPage"
              render={({ field }) => (
                <Select
                  defaultValue="25"
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger size="sm" className="w-40">
                    <SelectValue placeholder="Itens por página" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <FormItem className="flex">
            <Button className="flex-1 bg-red-500 dark:bg-red-400">
              Limpar Filtros
            </Button>
            <Button type="submit" className="flex-1 bg-red-500 dark:bg-red-400">
              Filtrar
            </Button>
          </FormItem>
        </form>
      </Form>
    </section>
  );
}
