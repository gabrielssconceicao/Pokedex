import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Variant } from './pokemon-card';

type Props = {
  src: string;
  alt: string;
  bgColor: string;
  variant?: Variant;
};
export function PokemonImage({
  src,
  alt,
  bgColor,
  variant = 'default',
}: Props) {
  const isCard = variant === 'card';
  const cardSize = isCard ? 50 : 60;
  return (
    <div
      className={cn(
        'flex h-24 items-center justify-center px-2',
        bgColor,
        isCard
          ? 'w-full rounded-t-lg rounded-b-[50%]'
          : 'w-1/3 rounded-l-lg rounded-r-[50%]'
      )}
    >
      <Image src={src} alt={alt} width={cardSize} height={cardSize} />
    </div>
  );
}
