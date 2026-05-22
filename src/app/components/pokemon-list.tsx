'use client';
import { PokemonCard } from '@/components/pokemon-card';
import { PokemonFilters, usePokemons } from '@/hooks/use-pokemons';

import { PokemonListSkeleton } from './pokemon-list-skeleton';

interface PokemonListProps {
  filters: PokemonFilters;
}

export function PokemonList({ filters }: PokemonListProps) {
  const { data, isLoading } = usePokemons(filters);
  return (
    <section className="flex grow basis-0 flex-wrap items-center justify-between gap-4 overflow-y-auto px-4 py-2">
      {isLoading && <PokemonListSkeleton />}
      {data &&
        data.pokemons.length > 0 &&
        data.pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      {data && data.pokemons.length === 0 && (
        <h2 className="flex-1 text-center text-2xl">No pokemon found</h2>
      )}
    </section>
  );
}
