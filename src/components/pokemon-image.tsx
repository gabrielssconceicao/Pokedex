import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Variant } from './pokemon-card';

type HeaderVariant = Variant | 'header';

type Props = {
  src: string;
  alt: string;
  bgColor: string;
  variant?: HeaderVariant;
};
export function PokemonImage({
  src,
  alt,
  bgColor,
  variant = 'default',
}: Props) {
  const isCard = variant === 'card';
  const cardSize = isCard ? 50 : 60;

  const variantStyle: Record<HeaderVariant, string> = {
    default: 'w-1/3 rounded-l-lg rounded-r-[50%]',
    card: 'w-full rounded-t-lg rounded-b-[50%]',
    header:
      'flex min-h-24 w-28 items-center justify-end rounded-l-[50%] rounded-r-2xl px-2',
  };

  return (
    <div
      className={cn(
        'flex h-24 items-center justify-center px-2',
        bgColor,
        variantStyle[variant]
      )}
    >
      <Image src={src} alt={alt} width={cardSize} height={cardSize} />
    </div>
  );
}
