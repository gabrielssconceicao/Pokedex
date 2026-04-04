'use client';
import Image from 'next/image';

import { ThemeToggle } from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { getPokemonColors } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

const pokemon = {
  name: 'Pikachu',
  id: 1,
  image: '/pokemon-egg.png',
  types: ['electric'],
};

export function PokemonHeader() {
  const { bg, border, text, img } = getPokemonColors('fire');

  return (
    <header
      className={cn('flex items-stretch justify-between gap-2 rounded-2xl', bg)}
    >
      <div className="flex flex-1 flex-col justify-around space-y-2 px-3 py-1">
        <div className="flex flex-1 flex-col justify-between gap-2">
          <h1
            className={cn(
              'flex-1 font-mono text-xl font-semibold break-all',
              text
            )}
          >
            {pokemon.name}
          </h1>

          <div className="flex items-center justify-between gap-3">
            <span className={'${textColorStyle} text-md font-mono'}>
              #{String(pokemon.id).padStart(3, '0')}
            </span>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex gap-3 px-2 py-1">
          {pokemon.types.map((type) => (
            <Badge
              key={type}
              className={cn('flex-1 border-2 bg-transparent', text, border)}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>
      <div
        className={cn(
          'flex min-h-24 w-24 items-center justify-end rounded-l-[50%] rounded-r-2xl px-2',
          img
        )}
      >
        <Image
          src={'/pokemon-egg.png'}
          alt="Egg"
          width={50}
          height={50}
          className="rounded-tr-2xl object-contain"
        />
      </div>
    </header>
  );
}
