import Image from 'next/image';

import { ThemeToggle } from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';
import {
  getPokemonBgColor,
  getPokemonTextColor,
} from '@/constants/pokemon-types';

const pokemon = {
  name: 'Pikachu',
  id: 1,
  image: '/pokemon-egg.png',
  types: ['electric'],
};

export function PokemonHeader() {
  const color = getPokemonBgColor('fire');
  const textColor = getPokemonTextColor('fire');

  const textColorStyle = `text-${textColor.light} dark:text-${textColor.dark}`;
  return (
    <header
      className={`bg-${color.light} dark:bg-${color.dark} flex items-stretch justify-between gap-2 rounded-2xl`}
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
              className={`flex-1 bg-transparent ${textColorStyle} border-2 border-${textColor.light} dark:border-${textColor.dark}`}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>
      <div
        className={`flex h-24 w-32 items-center justify-end rounded-l-[50%] rounded-r-2xl bg-${color.dark} px-2 dark:bg-${color.light}`}
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
