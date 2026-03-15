'use client';
import Image from 'next/image';

import { ThemeToggle } from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { getPokemonColors } from '@/constants/pokemon-types';

const pokemon = {
  name: 'Pikachu',
  id: 1,
  image: '/pokemon-egg.png',
  types: ['electric'],
};

export function PokemonHeader() {
  const { bg, border, text } = getPokemonColors('fire');

  const textColorStyle = `${text.light} dark:${text.dark}`;
  const bgColorStyle = `${bg.light} dark:${bg.dark}`;
  const bgReverseColorStyle = `dark:${bg.light} ${bg.dark}`;
  const borderColorStyle = `${border.light} ${border.dark}`;
  return (
    <header
      className={`${bgColorStyle} flex items-stretch justify-between gap-2 rounded-2xl`}
    >
      <div className="flex flex-1 flex-col justify-around px-3 py-1">
        <div className="flex justify-between gap-2">
          <h1 className={`${textColorStyle} font-mono text-lg font-semibold`}>
            {pokemon.name}
          </h1>

          <div className="flex items-center justify-between gap-3">
            <span className={`${textColorStyle} text-md font-mono`}>
              #{String(pokemon.id).padStart(3, '0')}
            </span>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex gap-3 px-2 py-1">
          {pokemon.types.map((type) => (
            <Badge
              key={type}
              className={`flex-1 bg-transparent ${textColorStyle} border-2 ${borderColorStyle}`}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>
      <div
        className={`flex h-24 w-32 items-center justify-end rounded-l-[50%] rounded-r-2xl ${bgReverseColorStyle} px-2`}
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
