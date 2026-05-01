'use client';
import Link from 'next/link';

import { Pokemon } from '@/interface/pokemon';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

import { PokemonImage } from './pokemon-image';
import { PokemonNameTitle } from './pokemon-name-title';
import { PokemonTypeBadge } from './pokemon-type-badge';

export type Variant = 'default' | 'card';

type Props = {
  pokemon: Pokemon;
  variant?: Variant;
};

export function PokemonCard({ pokemon, variant = 'default' }: Props) {
  const isCard = variant === 'card';
  const { id, name, sprites, types } = pokemon;

  const { bg, border, text, img } = getPokemonColors(types[0]);

  const variantStyle: Record<Variant, string> = {
    default: 'min-w-60 flex-1 gap-1 transition-transform hover:scale-[1.02]',
    card: 'h-56 w-34 flex-col justify-between overflow-hidden',
  };

  return (
    <Link
      href={`/pokemon/${name}/details`}
      className={cn(
        'shadow-accent-foreground flex items-stretch rounded-2xl shadow',
        bg.default,
        variantStyle[variant]
      )}
    >
      <PokemonImage
        sprites={sprites}
        alt={name}
        bgColor={img}
        variant={variant}
      />
      <div
        className={cn(
          'flex flex-1 flex-col justify-between gap-2',
          isCard ? 'items-stretch p-2' : 'px-2 py-1'
        )}
      >
        <PokemonNameTitle
          name={name}
          id={id}
          textColor={text.default}
          variant={variant}
        />

        <div className="flex flex-col items-stretch gap-2 px-2">
          {types.map((type) => (
            <PokemonTypeBadge
              key={type}
              type={type}
              textColor={text.default}
              borderColor={border}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
