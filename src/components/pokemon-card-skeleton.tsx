import { cn } from '@/lib/utils';

import { Variant } from './pokemon-card';
import { PokemonImageSkeleton } from './pokemon-image-skeleton';
import { PokemonNameTitleSkeleton } from './pokemon-name-title-skeleton';
import { PokemonTypeBadgeSkeleton } from './pokemon-type-badge-skeleton';

type Props = {
  variant?: Variant;
};

export function PokemonCardSkeleton({ variant = 'default' }: Props) {
  const isCard = variant === 'card';

  return (
    <div
      className={cn(
        'flex items-stretch',
        isCard ? 'h-56 w-28 flex-col' : 'min-w-60 flex-1 gap-1 p-1'
      )}
    >
      <PokemonImageSkeleton />

      <div
        className={cn(
          'flex flex-1 flex-col justify-between gap-2',
          isCard ? 'items-stretch p-2' : 'px-2 py-1'
        )}
      >
        <PokemonNameTitleSkeleton variant={variant} />

        <div className="flex flex-col items-stretch gap-2 px-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <PokemonTypeBadgeSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
