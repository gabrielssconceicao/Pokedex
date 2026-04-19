'use client';
import Link from 'next/link';

import { getPokemonColors, PokemonType } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

import { PokemonImage } from './pokemon-image';
import { PokemonNameTitle } from './pokemon-name-title';
import { PokemonTypeBadge } from './pokemon-type-badge';

export type Variant = 'default' | 'card';

type Props = {
  id: number;
  img: string;
  name: string;
  types: PokemonType[];
  variant?: Variant;
};

export function PokemonCard({
  id,
  img,
  name,
  types,
  variant = 'default',
}: Props) {
  const isCard = variant === 'card';
  const { bg, border, text, img: Img } = getPokemonColors(types[0]);

  return (
    <Link
      href={`/pokemon/${name}/details`}
      className={cn(
        'flex items-stretch rounded-2xl',
        bg,
        isCard
          ? 'h-56 w-28 min-w-fit flex-col justify-between overflow-hidden'
          : 'min-w-60 flex-1 gap-1 transition-transform hover:scale-[1.02]'
      )}
    >
      <PokemonImage src={img} alt={name} bgColor={Img} variant={variant} />
      <div
        className={cn(
          'flex flex-1 flex-col justify-between gap-2',
          isCard ? 'items-stretch p-2' : 'px-2 py-1'
        )}
      >
        <PokemonNameTitle
          name={name}
          id={id}
          textColor={text}
          variant={variant}
        />

        <div className="flex flex-col items-stretch gap-2 px-2">
          {types.map((type) => (
            <PokemonTypeBadge
              key={type}
              type={type}
              textColor={text}
              borderCoor={border}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
