import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

import { Variant } from './pokemon-card';

type Props = {
  variant?: Variant | 'header';
};

export function PokemonNameTitleSkeleton({ variant = 'default' }: Props) {
  const variantStyles: Record<Variant | 'header', string> = {
    default: 'flex-row items-center justify-between px-2',
    card: 'flex-col items-center justify-center gap-0.5',
    header:
      'flex-1 justify-between xs:flex-row xs:text-xl xs:font-semibold break-all flex-col items-center',
  };

  return (
    <div className={cn('flex', variantStyles[variant])}>
      <Skeleton className="h-4 w-12" />
      <Skeleton className="h-4 w-20" />
    </div>
  );
}
