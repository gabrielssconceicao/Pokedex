'use client';
import { PokemonCard } from '@/components/pokemon-card';
import { PokemonType } from '@/constants/pokemon-types';
import { PokemonFilters, usePokemons } from '@/hooks/use-pokemons';

interface PokemonListProps {
  filters: PokemonFilters;
}

export function PokemonList({ filters }: PokemonListProps) {
  const { data, isLoading } = usePokemons(filters);
  return (
    <section className="flex grow basis-0 flex-wrap items-center justify-between gap-4 overflow-y-auto px-4 py-2">
      {isLoading && <h2>Carregando</h2>}
      {data &&
        data.pokemons.length > 0 &&
        data.pokemons.map(({ id, sprites, name, types }) => (
          <PokemonCard
            key={id}
            id={id}
            name={name}
            img={'/pokemon-egg.png'}
            types={types}
          />
        ))}
      {data && data.pokemons.length === 0 && (
        <h2 className="flex-1 text-center text-2xl">No pokemon found</h2>
      )}
    </section>
  );
}
