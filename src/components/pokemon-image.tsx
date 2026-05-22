import Image from 'next/image';

import { PokemonSprite } from '@/interface/pokemon-sprite';
import { cn } from '@/lib/utils';

import { Variant } from './pokemon-card';

type HeaderVariant = Variant | 'header';

type Props = {
  sprites: PokemonSprite;
  alt: string;
  bgColor: string;
  variant?: HeaderVariant;
};
export function PokemonImage({
  sprites,
  alt,
  bgColor,
  variant = 'default',
}: Props) {
  const variantStyle: Record<HeaderVariant, string> = {
    default: '  w-1/3 rounded-l-lg rounded-r-[50%]',
    card: 'w-full   rounded-t-lg rounded-b-[50%]',
    header:
      'flex xs:w-28 w-20 items-center justify-end rounded-l-[50%] rounded-r-2xl px-2',
  };

  const sprite =
    sprites.other['official-artwork'].front_default ||
    sprites.front_default ||
    '/pokemon-egg.png';

  return (
    <div
      className={cn(
        'relative flex min-h-24 items-center justify-center px-2',
        bgColor,
        variantStyle[variant]
      )}
    >
      <Image
        src={sprite}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 180px"
        className="object-contain px-1 py-1"
      />
    </div>
  );
}
