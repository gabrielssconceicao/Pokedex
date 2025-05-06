import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';

import { getPokemons } from '@/api/get-pokemons';
import { Button } from '@/components/ui/button';

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
      <footer className="flex items-center justify-between px-5 py-1">
        <span className="text-muted-foreground text-sm">Total de 20 items</span>
        {/*Items per page? */}
        <div className="flex items-center gap-6 lg:gap-8">
          <div className="text-muted-foreground text-md">Página 1 de 20</div>
          <div className="flex items-center gap-2">
            <Button className="h-8 w-8 p-0">
              <span className="sr-only">Primeira Página</span>
              <CaretDoubleLeft className="h-3 w-3" />
            </Button>
            <Button className="h-8 w-8 p-0">
              <span className="sr-only">Página anterior</span>
              <CaretLeft className="h-3 w-3" />
            </Button>
            <Button className="h-8 w-8 p-0">
              <span className="sr-only">Próxima Página</span>
              <CaretRight className="h-3 w-3" />
            </Button>
            <Button className="h-8 w-8 p-0">
              <span className="sr-only">Última Página</span>
              <CaretDoubleRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
