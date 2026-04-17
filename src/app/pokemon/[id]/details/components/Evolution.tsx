'use client';
import { ArrowRight } from 'lucide-react';
import React from 'react';

import { PokemonCard } from '@/components/pokemon-card';
import { PokemonType } from '@/constants/pokemon-types';

const evolutionChain: Array<{
  id: number;
  image: string;
  name: string;
  types: PokemonType[];
  evolutionDetail: string | null;
}> = [
  {
    id: 1,
    image: '/pokemon-egg.png',
    name: 'Charmander',
    types: ['fire'],
    evolutionDetail: null,
  },
  {
    id: 2,
    image: '/pokemon-egg.png',
    name: 'Charmeleon',
    types: ['fire'],
    evolutionDetail: 'Happiness',
  },
  {
    id: 3,
    image: '/pokemon-egg.png',
    name: 'Charizard',
    types: ['fire'],
    evolutionDetail: 'Level',
  },
];

export function Evolution() {
  return (
    <section className="max-xs:flex-col flex flex-row items-center justify-around gap-2 px-3 py-2">
      {evolutionChain.map(({ id, evolutionDetail, image, name, types }) => (
        <React.Fragment key={id}>
          {evolutionDetail && (
            <div className="flex flex-col items-center justify-center gap-3">
              <ArrowRight />
              <span>{evolutionDetail}</span>
            </div>
          )}
          <PokemonCard
            key={id}
            id={id}
            img={image}
            name={name}
            types={types}
            variant="card"
          />
        </React.Fragment>
      ))}
    </section>
  );
}
