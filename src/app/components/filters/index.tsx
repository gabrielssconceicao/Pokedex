'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useIsFetching } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { getPokemonSearchParams } from '@/app/utils/get-pokemom-search-params';
import { parsePokemonSearchParams } from '@/app/utils/parse-pokemon-search-params';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PokemonType, pokemonTypes } from '@/constants/pokemon-types';

import { PerPageSelect } from './per-page-select';
import { PokemonTypeFilter } from './pokemon-type-filter';

const searchParamsForm = z.object({
  id: z.string().refine((val) => {
    if (!val) return true;
    const num = Number(val);
    return !isNaN(num) && num > 0;
  }, 'ID must be a positive number'),
  name: z.string().optional(),
  perPage: z.number().positive(),
  types: z.array(z.enum(pokemonTypes as [PokemonType, ...PokemonType[]])),
});

type SearchParamsForm = z.infer<typeof searchParamsForm>;

export function Filters() {
  const searchParams = useSearchParams();
  const { id, name, page, perPage, types } = parsePokemonSearchParams(
    getPokemonSearchParams(searchParams)
  );
  const router = useRouter();
  const pathname = usePathname();

  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchParamsForm>({
    defaultValues: {
      id: id ? String(id) : '',
      name: name ?? '',
      types: types as PokemonType[],
      perPage: Number(perPage ?? 25),
    },
    resolver: zodResolver(searchParamsForm),
  });

  const isFetching = useIsFetching({
    queryKey: ['pokemon', page, perPage, id, name, types.join(',')],
  });
  const isLoading = isFetching > 0;
  function onSubmitForm({ id, name, perPage, types }: SearchParamsForm) {
    const params = new URLSearchParams();

    if (name) {
      params.set('q', name);
    }
    if (id) {
      params.set('id', id);
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
          <div className="flex flex-col">
            <Input placeholder="Id" {...register('id')} />

            {errors.id && (
              <span className="mt-1 text-center text-xs text-red-500">
                {errors.id.message}
              </span>
            )}
          </div>
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
          <Button
            type="submit"
            disabled={isLoading}
            className="hover:bg-primary/60 text-accent-foreground flex-1 cursor-pointer font-mono font-semibold tracking-wider disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? 'Carregando... ' : 'Buscar'}
          </Button>
          <Button
            type="button"
            variant={'secondary'}
            className="flex-1 cursor-pointer"
            onClick={onResetForm}
          >
            Limpar
          </Button>
        </div>
      </form>
    </section>
  );
}
