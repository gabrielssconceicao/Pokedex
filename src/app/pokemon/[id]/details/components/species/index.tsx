'use client';
import { PokemonType } from '@/constants/pokemon-types';
import { usePokemon } from '@/hooks/use-pokemon';
import { usePokemonSpecies } from '@/hooks/use-pokemon-species';
import { PokemonParamId } from '@/interface/pokemon-param-id';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

import { SpeciesCard } from './species-card';
import { SpeciesSkeleton } from './species-skeleton';

const formatWeight = (weight: number) =>
  `${(weight * 0.1).toFixed(1)} kg (${((weight / 10) * 2.20462).toFixed(2)} lbs)`;

const formatHeight = (height: number) =>
  `${(height / 10).toFixed(2)} m (${((height / 10) * 3.28084).toFixed(2).toString().replace('.', "'")}")`;

export function Species({ id }: PokemonParamId) {
  const { data: pokemon } = usePokemon({
    pokemon: id,
  });
  const { data: species, isLoading } = usePokemonSpecies({
    id: pokemon?.id as number,
  });

  const { text } = getPokemonColors(pokemon?.types[0] as PokemonType);

  return (
    <section className="grid grid-cols-2 gap-1 py-2">
      {isLoading && <SpeciesSkeleton />}
      {!species && (
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
