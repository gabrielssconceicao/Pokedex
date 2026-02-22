import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { PerPageSelect } from './per-page-select';
import { PokemonTypeFilter } from './pokemon-type-filter';

export function Filters() {
  return (
    <section className="border-b-foreground border-b px-2 py-3">
      <form action="" className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <div className="flex flex-row gap-3 space-y-2">
          <Input placeholder="Id" className="w-20" />
          <Input placeholder="Pokemon" className="sm:flex-1" />
        </div>
        <div className="flex flex-row gap-3 space-y-3 sm:flex-1">
          <PerPageSelect />
          <PokemonTypeFilter />
        </div>
        <div className="flex flex-row gap-3 sm:flex-1">
          <Button type="button" className="bg-primary flex-1">
            Buscar
          </Button>
          <Button type="button" variant={'secondary'} className="flex-1">
            Limpar
          </Button>
        </div>
      </form>
    </section>
  );
}
