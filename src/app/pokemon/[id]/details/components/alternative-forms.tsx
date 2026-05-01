'use client';

import { PokemonCard } from '@/components/pokemon-card';
import { PokemonCardSkeleton } from '@/components/pokemon-card-skeleton';
import { PokemonType } from '@/constants/pokemon-types';
import { usePokemon } from '@/hooks/use-pokemon';
import { usePokemonSpecies } from '@/hooks/use-pokemon-species';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

const alternativeForms: Array<{
  id: number;
  image: string;
  name: string;
  types: PokemonType[];
}> = Array.from({ length: 4 }).map((_, index) => ({
  id: index + 1,
  image: '/pokemon-egg.png',
  name: 'Charmander',
  types: ['fire'],
}));

type AlternativeFormProps = {
  id: string;
};

export function AlternativeForms({ id }: AlternativeFormProps) {
  const { data: poke } = usePokemon({ pokemon: id });
  const { data: species, isLoading } = usePokemonSpecies({ id: poke?.id });
  const { text } = getPokemonColors(poke?.types[0] as PokemonType);

  return (
    <section className="flex flex-wrap items-center justify-around gap-2 px-1 py-2">
      {isLoading && <PokemonCardSkeleton variant="card" />}
      {species &&
        species.varieties.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} variant="card" />
        ))}
      {species && !species.varieties.length && (
        <p
          className={cn(
            'text-accent text-center font-mono text-sm font-semibold tracking-wider',
            text.default
          )}
        >
          There are no alternative forms
        </p>
      )}
    </section>
  );
}
