'use client';
import { PokemonType } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

type CardProps = {
  label: string;
  value: string;
  pokemonType: PokemonType;
  colSpan?: 1 | 2;
};

export function SpeciesCard({
  label,
  value,
  pokemonType,
  colSpan = 1,
}: CardProps) {
  const colSpanMap = { 1: 'col-span-1', 2: 'col-span-2' };
  const { text, border } = getPokemonColors(pokemonType);
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-0.5 space-y-0.5',
        colSpanMap[colSpan],
        text.default
      )}
    >
      <span className="rounded-md px-1 text-center font-mono text-xs font-semibold">
        {label}
      </span>
      <div
        className={cn(
          'xs:text-sm w-full rounded-md border-2 px-2 py-1 text-center text-xs font-semibold tracking-wide',
          border
        )}
      >
        {value}
      </div>
    </div>
  );
}
