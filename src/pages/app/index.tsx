import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';

import { PokemonFilters } from './pokemon-filters';

export function Home() {
  return (
    <main className="flex h-full flex-1 flex-col gap-2 px-4">
      <PokemonFilters />
      <section className="grow basis-0 overflow-y-auto">
        {Array.from({ length: 20 }, (_, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b px-4 py-2"
          >
            <span className="text-sm">#{index + 1}</span>
            <span className="text-sm">Pikachu</span>
          </div>
        ))}
      </section>
      <footer className="flex items-center justify-between">
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
