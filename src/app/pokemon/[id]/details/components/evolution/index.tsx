'use client';

import { PokemonCardSkeleton } from '@/components/pokemon-card-skeleton';
import { usePokemon } from '@/hooks/use-pokemon';
import { usePokemonSpecies } from '@/hooks/use-pokemon-species';
import { PokemonParamId } from '@/interface/pokemon-param-id';

import { EvolutionTree } from './evolution-tree';

export function Evolution({ id }: PokemonParamId) {
  const { data: pokemon } = usePokemon({ pokemon: id });
  const { data: species, isLoading } = usePokemonSpecies({ id: pokemon?.id });
  return (
    <section className="xs:flex-row flex w-full flex-col flex-wrap items-center justify-around gap-3 px-3 py-2">
      {isLoading && <PokemonCardSkeleton />}
      {species && species.evolution_chain && (
        <EvolutionTree node={species.evolution_chain} />
      )}
    </section>
  );
}
