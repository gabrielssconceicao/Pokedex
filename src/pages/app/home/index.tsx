import { useQuery } from '@tanstack/react-query';

import { getPokemons } from '@/api/get-pokemons';

import { Pagination } from './pagination';
import { PokemonCard } from './pokemon-card';
import { PokemonFilters } from './pokemon-filters';
export function Home() {
  const { data: pokemons, isLoading: isPokemonsLoading } = useQuery({
    queryFn: getPokemons,
    queryKey: ['pokemons'],
  });
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
        itemsPerPage={20}
        pageIndex={0}
      />
    </main>
  );
}
