import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

export function PokemonImageSkeleton() {
  return (
    <div className={cn('flex h-24 items-center justify-center')}>
      <Skeleton className="h-16 w-16" />
    </div>
  );
}
