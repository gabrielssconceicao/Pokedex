import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
  MagnifyingGlass,
  X,
} from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Home() {
  return (
    <main className="flex h-full flex-1 flex-col gap-2 px-4">
      <div>
        <form className="flex items-center gap-3 px-2 py-2">
          <span className="text-sm font-bold">Filtros</span>
          <Input placeholder="Pokemon Id" className="h-8 w-40" />
          <Input placeholder="Pokemon Name" className="h-8 flex-1" />
          <Button className="bg-red-500 dark:bg-red-400" size={'sm'}>
            <MagnifyingGlass className="mr-2 h-3 w-3" />
            Filtrar
          </Button>
          <Button variant={'outline'} size={'sm'}>
            <X className="mr-2 h-3 w-3" />
            Limpar Filtros
          </Button>
        </form>
      </div>
      <section className="flex-1">main</section>
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
