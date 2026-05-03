'use client';

import { PokemonCardSkeleton } from '@/components/pokemon-card-skeleton';
import { PokemonType } from '@/constants/pokemon-types';
import { usePokemon } from '@/hooks/use-pokemon';
import { usePokemonSpecies } from '@/hooks/use-pokemon-species';
import { PokemonParamId } from '@/interface/pokemon-param-id';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

import { EvolutionTree } from './evolution-tree';

export function Evolution({ id }: PokemonParamId) {
  const { data: pokemon } = usePokemon({ pokemon: id });
  const { text } = getPokemonColors(pokemon?.types[0] as PokemonType);
  const { data: species, isLoading } = usePokemonSpecies({ id: pokemon?.id });
  return (
    <section className="xs:flex-row flex w-full flex-col flex-wrap items-center justify-around gap-3 px-1 py-2">
      {isLoading && <PokemonCardSkeleton />}
      {!species && (
        <p
          className={cn(
            'text-accent tracking-wides flex-1 text-center font-mono',
            text.default
          )}
        >
          This pokemon does not evolve
        </p>
      )}
      {species && species.evolution_chain && (
        <EvolutionTree node={species.evolution_chain} />
      )}
    </section>
  );
}
