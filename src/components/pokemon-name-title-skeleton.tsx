import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

import { Variant } from './pokemon-card';

type Props = {
  variant?: Variant | 'header';
};

export function PokemonNameTitleSkeleton({ variant = 'default' }: Props) {
  const isCard = variant === 'card';
  return (
    <div
      className={cn(
        'flex items-center justify-between',
        isCard && 'flex-col gap-2'
      )}
    >
      <Skeleton className="h-4 w-12" />
      <Skeleton className="h-4 w-20" />
    </div>
  );
}
