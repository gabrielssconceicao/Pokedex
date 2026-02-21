'use client';

import { Input } from '@/components/ui/input';

import { PerPageSelect } from './per-page-select';
import { PokemonTypeFilter } from './pokemon-type-filter';

export function Filters() {
  return (
    <section className="px-2 py-3">
      <form action="">
        <div className="flex flex-row gap-3 space-y-3">
          <Input placeholder="Id" className="w-20" />
          <Input placeholder="Pokemon" className="flex-1" />
        </div>
        <div className="flex flex-row gap-3">
          <PerPageSelect />
          <PokemonTypeFilter />
        </div>
      </form>
    </section>
  );
}
