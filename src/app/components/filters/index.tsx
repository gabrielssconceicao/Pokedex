'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PokemonType, pokemonTypes } from '@/constants/pokemon-types';

import { PerPageSelect } from './per-page-select';
import { PokemonTypeFilter } from './pokemon-type-filter';

const searchParamsForm = z.object({
  id: z.string(),
  name: z.string(),
  perPage: z.number(),
  types: z.array(
    z.enum(Object.keys(pokemonTypes) as [PokemonType, ...PokemonType[]])
  ),
});

type SearchParamsForm = z.infer<typeof searchParamsForm>;

export function Filters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchParamsForm>({
    defaultValues: {
      id: searchParams.get('id') ?? '',
      name: searchParams.get('name') ?? '',
      types: searchParams.getAll('type') as PokemonType[],
      perPage: Number(searchParams.get('perPage') ?? 25),
    },
    resolver: zodResolver(searchParamsForm),
  });

  function onSubmitForm({ id, name, perPage, types }: SearchParamsForm) {
    const params = new URLSearchParams();

    if (id) {
      params.set('id', id);
    }
    if (name) {
      params.set('id', name);
    }
    if (perPage) {
      params.set('perPage', String(perPage));
    }

    types.forEach((type) => params.append('type', type));
    router.push(`${pathname}?${params.toString()}`);
  }

  function onResetForm() {
    reset({
      id: '',
      name: '',
      perPage: 25,
      types: [],
    });

    router.push(pathname);
  }

  return (
    <section className="border-b-foreground border-b px-2 py-3">
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      >
        <div className="flex flex-row gap-3 sm:space-y-2">
          <Input
            placeholder="Id"
            className="w-14 sm:w-20 sm:flex-1"
            {...register('id')}
          />
          <Input
            placeholder="Pokemon"
            className="sm:flex-1"
            {...register('name')}
          />
        </div>
        <div className="flex flex-row gap-3 sm:flex-1 sm:space-y-3">
          <Controller
            control={control}
            name="perPage"
            render={({ field }) => (
              <PerPageSelect value={field.value} onChange={field.onChange} />
            )}
          />
          <Controller
            control={control}
            name="types"
            render={({ field }) => (
              <PokemonTypeFilter
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div className="flex flex-row gap-3 sm:flex-1">
          <Button type="submit" className="bg-primary flex-1">
            Buscar
          </Button>
          <Button
            type="button"
            variant={'secondary'}
            className="flex-1"
            onClick={onResetForm}
          >
            Limpar
          </Button>
        </div>
      </form>
    </section>
  );
}
