'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { getPokemonColors, PokemonType } from '@/constants/pokemon-types';

type Props = {
  image: string;
  name: string;
  types: PokemonType[];
};

export function EvolutionCard({ image, name, types }: Props) {
  const { bg, border, text } = getPokemonColors('fire');

  const textColorStyle = `${text.light} dark:${text.dark}`;
  const bgColorStyle = `${bg.light} ${bg.dark}`;
  const borderColorStyle = `${border.light} ${border.dark}`;
  return (
    <Link
      href={`/pokemon/${name}/details`}
      className={`flex w-28 flex-col items-stretch gap-2 rounded-lg ${bgColorStyle}`}
    >
      <div
        className={`flex h-24 w-full items-center justify-center rounded-t-lg rounded-b-[50%] px-2 ${bg.dark} dark:${bg.light}`}
      >
        <Image src={image} alt="Pokemon" width={60} height={60} />
      </div>
      <span
        className={`text-md text-center font-mono text-sm ${textColorStyle}`}
      >
        Charmander
      </span>
      <div className="flex gap-3 px-2 py-1">
        {types.map((type) => (
          <Badge
            key={type}
            className={`flex-1 bg-transparent ${textColorStyle} border-2 ${borderColorStyle}`}
          >
            {type}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
