'use client';

import { PokemonCard } from '@/components/pokemon-card';
import { getPokemonColors, PokemonType } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

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

export function AlternativeForms() {
  const { text } = getPokemonColors('fire');

  return (
    <section className="flex flex-wrap items-center justify-around gap-2 px-1 py-2">
      {alternativeForms.map(({ id, image, name, types }) => (
        <PokemonCard key={id} id={id} img={image} name={name} types={types} />
      ))}
      {!alternativeForms.length && (
        <p
          className={cn(
            'text-accent text-center font-mono text-sm font-semibold tracking-wider',
            text
          )}
        >
          There are no alternative forms
        </p>
      )}
    </section>
  );
}
