'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { getPokemonColors, PokemonType } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

type Props = {
  image: string;
  name: string;
  types: PokemonType[];
};

export function EvolutionCard({ image, name, types }: Props) {
  const { bg, border, text, img } = getPokemonColors('fire');

  return (
    <Link
      href={`/pokemon/${name}/details`}
      className={cn('flex w-28 flex-col items-stretch gap-2 rounded-lg', bg)}
    >
      <div
        className={cn(
          'flex h-24 w-full items-center justify-center rounded-t-lg rounded-b-[50%] px-2',
          img
        )}
      >
        <Image src={image} alt="Pokemon" width={60} height={60} />
      </div>
      <span className={cn('text-md text-center font-mono text-sm', text)}>
        Charmander
      </span>
      <div className="flex gap-3 px-2 py-1">
        {types.map((type) => (
          <Badge
            key={type}
            className={cn('flex-1 border-2 bg-transparent', border, text)}
          >
            {type}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
