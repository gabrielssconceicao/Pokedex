'use client';
import { ArrowRight } from 'lucide-react';
import React from 'react';

import { PokemonType } from '@/constants/pokemon-types';

import { EvolutionCard } from './Evolution-card';

const alternativeForms: Array<{
  id: number;
  image: string;
  name: string;
  types: PokemonType[];
}> = Array.from({ length: 0 }).map((_, index) => ({
  id: index + 1,
  image: '/pokemon-egg.png',
  name: 'Charmander',
  types: ['fire'],
}));

export function AlternativeForms() {
  return (
    <section className="flex flex-wrap items-center justify-around gap-2 px-1 py-2">
      {alternativeForms.map(({ id, ...rest }) => (
        <EvolutionCard key={id} {...rest} />
      ))}
      {!alternativeForms.length && (
        <p className="text-accent font-mono text-sm font-semibold">
          There are no alternative forms
        </p>
      )}
    </section>
  );
}
