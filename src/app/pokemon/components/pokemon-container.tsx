'use client';
import React from 'react';

import { PokemonType } from '@/constants/pokemon-types';
import { usePokemon } from '@/hooks/use-pokemon';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

type PokemonCardProps = {
  title?: string;
  pokemonId: string;
  children: React.ReactNode;
};

export function PokemonContainer({
  children,
  title,
  pokemonId,
}: PokemonCardProps) {
  const { data } = usePokemon({ pokemon: pokemonId });
  if (!data) return null;
  const { text, bg } = getPokemonColors(data.types[0] as PokemonType);
  return (
    <div className={cn('flex flex-col items-stretch justify-center gap-2 p-2')}>
      {title && (
        <h3
          className={cn(
            'text-md text-center font-sans font-semibold',
            text.default
          )}
        >
          {title}
        </h3>
      )}
      <section
        className={cn(
          'rounded-lg bg-slate-100 px-2 py-1 text-gray-800 shadow-md',
          bg.default,
          text.default
        )}
      >
        {children}
      </section>
    </div>
  );
}
