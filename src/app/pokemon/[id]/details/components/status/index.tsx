'use client';
import { PokemonType } from '@/constants/pokemon-types';
import { usePokemon } from '@/hooks/use-pokemon';
import { PokemonParamId } from '@/interface/pokemon-param-id';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

import { SpeciesSkeleton } from './status-skeleton';

export function Status({ id }: PokemonParamId) {
  const { data: pokemon, isLoading } = usePokemon({ pokemon: id });
  const { text, bg, border } = getPokemonColors(
    pokemon?.types[0] as PokemonType
  );
  const totalStat =
    pokemon?.stats.reduce((acc, stat) => acc + stat.base_stat, 0) || 0;
  const getWidth = (value: number) => {
    if (!totalStat) return '0%';
    return `${((value / totalStat) * 100 + 20).toFixed(0)}%`;
  };
  return (
    <section className="flex flex-col gap-3 px-2 py-3">
      {isLoading && <SpeciesSkeleton />}
      {pokemon &&
        !isLoading &&
        pokemon.stats.map(({ name, base_stat }) => (
          <div className="flex w-full items-stretch" key={name}>
            <span
              className={cn(
                'flex min-w-12 items-center justify-center rounded-l-2xl border-2 px-1 py-1 text-center font-mono text-xs font-semibold sm:w-18',
                bg.default,
                text.default,
                border
              )}
            >
              {name}
            </span>
            <div
              className={cn(
                'flex items-center justify-end rounded-r-2xl px-4',
                bg.inverse,
                text.inverse
              )}
              style={{
                width: getWidth(base_stat),
              }}
            >
              {base_stat}
            </div>
          </div>
        ))}
    </section>
  );
}
