import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

import { Variant } from './pokemon-card';

type HeaderVariant = Variant | 'header';

type Props = {
  variant?: HeaderVariant;
};

export function PokemonImageSkeleton({ variant = 'default' }: Props) {
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
        variantStyle[variant]
      )}
    >
      <Skeleton className="h-12 w-12 rounded-full" />
    </div>
  );
}
