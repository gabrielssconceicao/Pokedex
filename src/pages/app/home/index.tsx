import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { z } from 'zod';

import { getPokemons } from '@/api/get-pokemons';

import { Pagination } from './pagination';
import { PokemonCard } from './pokemon-card';
import { PokemonFilters } from './pokemon-filters';
export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageIndex = z.coerce
    .number()
    .transform(page => page - 1)
    .parse(searchParams.get('page') ?? '1');
  const itemsPerPage = z.coerce
    .number()
    .parse(searchParams.get('itemsPerPage') ?? '20');

  const { data: pokemons, isLoading: isPokemonsLoading } = useQuery({
    queryFn: () =>
      getPokemons({ limit: itemsPerPage, offset: pageIndex * itemsPerPage }),
    queryKey: ['pokemons', pageIndex, itemsPerPage],
  });

  function handlePagination(pageIndex: number) {
    setSearchParams(state => {
      state.set('page', String(pageIndex + 1));
      return state;
    });
  }

  return (
    <main className="flex h-full flex-1 flex-col gap-2">
      <PokemonFilters />
      <section className="flex grow basis-0 flex-wrap justify-evenly gap-4 overflow-y-auto px-4 py-2">
        {isPokemonsLoading ? (
          <span>Loading...</span>
        ) : (
          pokemons &&
          pokemons.data.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        )}
      </section>

      <Pagination
        totalItems={pokemons?.count || 0}
        itemsPerPage={itemsPerPage}
        pageIndex={pageIndex}
        onPageChange={handlePagination}
      />
    </main>
  );
}
