'use client';

import { PokemonContainer } from '@/app/pokemon/components/pokemon-container';
import {
  damageDirectionLabels,
  getDamageTitle,
} from '@/app/utils/map-damage-values';
import { usePokemon } from '@/hooks/use-pokemon';
import { usePokemonWeakness } from '@/hooks/use-pokemon-weakness';
import { PokemonParamId } from '@/interface/pokemon-param-id';

import { DamageBadge } from './damage-badge';
import { WeaknessSkeleton } from './weakness-list-skeleton';

function typedEntries<T extends object>(obj: T) {
  return Object.entries(obj) as {
    [K in keyof T]: [K, T[K]];
  }[keyof T][];
}

export function WeaknessList({ id }: PokemonParamId) {
  const { data: pokemon } = usePokemon({ pokemon: id });
  const { data: weakness, isLoading } = usePokemonWeakness({
    id: pokemon?.id as number,
    types: pokemon?.typesId as number[],
  });

  return (
    <section className="space-y-3 py-3">
      {isLoading && <WeaknessSkeleton />}
      {pokemon &&
        weakness &&
        typedEntries(weakness).map(([direction, value]) => (
          <div key={direction}>
            <h2 className="text-center font-mono text-lg font-semibold tracking-wide">
              {damageDirectionLabels[direction]}
            </h2>
            {typedEntries(value).map(
              ([key, types]) =>
                types.length > 0 && (
                  <PokemonContainer
                    key={key}
                    title={getDamageTitle(direction, key)}
                    pokemonId={id}
                  >
                    {
                      <div className="flex flex-wrap items-center justify-center gap-3 px-2 py-3">
                        {types.map((type) => (
                          <DamageBadge damage={key} type={type} key={type} />
                        ))}
                      </div>
                    }
                  </PokemonContainer>
                )
            )}
          </div>
        ))}
    </section>
  );
}
