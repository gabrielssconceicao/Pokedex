'use client';
import { useSearchParams } from 'next/navigation';

import { PokemonType } from '@/constants/pokemon-types';
import { usePokemon } from '@/hooks/use-pokemon';
import { usePokemonSpecies } from '@/hooks/use-pokemon-species';
import { PokemonParamId } from '@/interface/pokemon-param-id';
import { VersionName } from '@/interface/version-name';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

import { SpeciesCard } from './species-card';
import { SpeciesSkeleton } from './species-skeleton';
import { formatHeight, formatWeight } from './utils/formatters';

export function Species({ id }: PokemonParamId) {
  const searchParams = useSearchParams();
  const version = (searchParams.get('version') || 'red') as VersionName;
  const { data: pokemon } = usePokemon({
    pokemon: id,
  });
  const { data: species, isLoading } = usePokemonSpecies({
    id: pokemon?.id as number,
    version,
  });

  const { text } = getPokemonColors(pokemon?.types[0] as PokemonType);

  return (
    <section className="grid grid-cols-2 gap-1 py-2">
      {isLoading && <SpeciesSkeleton />}
      {!species && !isLoading && (
        <p
          className={cn(
            'text-accent col-span-2 text-center font-mono tracking-wider',
            text.default
          )}
        >
          This pokemon does not have a description
        </p>
      )}
      {pokemon && species && (
        <>
          <SpeciesCard
            label="Description"
            value={
              species.flavor_text ||
              "This pokemon doesn't have a description for this version"
            }
            colSpan={2}
            pokemonType={pokemon.types[0]}
          />
          <SpeciesCard
            label="Height"
            value={formatHeight(pokemon.height)}
            pokemonType={pokemon.types[0]}
          />
          <SpeciesCard
            label="Weight"
            value={formatWeight(pokemon.weight)}
            pokemonType={pokemon.types[0]}
          />
        </>
      )}
    </section>
  );
}
