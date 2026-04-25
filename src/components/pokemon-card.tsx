'use client';
import Link from 'next/link';

import { FetchPokemon } from '@/interface/fetch-pokemon';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

import { PokemonImage } from './pokemon-image';
import { PokemonNameTitle } from './pokemon-name-title';
import { PokemonTypeBadge } from './pokemon-type-badge';

export type Variant = 'default' | 'card';

type Props = {
  pokemon: FetchPokemon;
  variant?: Variant;
};

export function PokemonCard({ pokemon, variant = 'default' }: Props) {
  const isCard = variant === 'card';
  const { id, name, sprites, types } = pokemon;
  const sprite =
    sprites.other['official-artwork'].front_default ||
    sprites.front_default ||
    '/pokemon-egg.png';
  const { bg, border, text, img } = getPokemonColors(types[0]);

  return (
    <Link
      href={`/pokemon/${name}/details`}
      className={cn(
        'flex items-stretch rounded-2xl',
        bg.default,
        isCard
          ? 'h-56 w-28 min-w-fit flex-col justify-between overflow-hidden'
          : 'min-w-60 flex-1 gap-1 transition-transform hover:scale-[1.02]'
      )}
    >
      <PokemonImage src={sprite} alt={name} bgColor={img} variant={variant} />
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
              borderCoor={border}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
