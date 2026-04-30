'use client';
import { usePokemon } from '@/hooks/use-pokemon';
import { usePokemonSpecies } from '@/hooks/use-pokemon-species';

import { SpeciesCard } from './species-card';
import { SpeciesSkeleton } from './species-skeleton';

interface SpeciesProps {
  id: string;
}

const formatWeight = (weight: number) =>
  `${(weight * 0.1).toFixed(1)} kg (${((weight / 10) * 2.20462).toFixed(2)} lbs)`;

const formatHeight = (height: number) =>
  `${(height / 10).toFixed(2)} m (${((height / 10) * 3.28084).toFixed(2).toString().replace('.', "'")}")`;

export function Species({ id }: SpeciesProps) {
  const { data: pokemon, isLoading: isPokemonLoading } = usePokemon({
    pokemon: id,
  });
  const { data: species, isLoading: isSpeciesLoading } = usePokemonSpecies({
    id: pokemon?.id,
  });

  return (
    <section className="grid grid-cols-2 gap-1 py-2">
      {(isPokemonLoading || isSpeciesLoading) && <SpeciesSkeleton />}
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
