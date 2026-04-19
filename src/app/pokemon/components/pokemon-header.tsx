'use client';

import { PokemonImage } from '@/components/pokemon-image';
import { PokemonNameTitle } from '@/components/pokemon-name-title';
import { PokemonTypeBadge } from '@/components/pokemon-type-badge';
import { ThemeToggle } from '@/components/theme-toggle';
import { getPokemonColors } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

const pokemon = {
  name: 'Pikachu',
  id: 1,
  image: '/pokemon-egg.png',
  types: ['electrica'],
};

export function PokemonHeader() {
  const { bg, border, text, img } = getPokemonColors('fire');

  return (
    <header
      className={cn('flex items-stretch justify-between gap-2 rounded-2xl', bg)}
    >
      <div className="flex flex-1 flex-col justify-around space-y-2 px-3 py-1">
        <div className="flex flex-1 items-center justify-between gap-3">
          <ThemeToggle />
          <PokemonNameTitle
            name={pokemon.name}
            id={pokemon.id}
            textColor={text}
            variant="header"
          />
        </div>

        <div className="flex gap-3 px-2 py-1">
          {pokemon.types.map((type) => (
            <PokemonTypeBadge
              key={type}
              type={type}
              borderCoor={border}
              textColor={text}
            />
          ))}
        </div>
      </div>
      <PokemonImage
        alt={pokemon.name}
        src={pokemon.image}
        bgColor={img}
        variant="header"
      />
    </header>
  );
}
