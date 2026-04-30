import { Skeleton } from '@/components/ui/skeleton';

export function SpeciesSkeleton() {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-1">
      <Skeleton className="col-span-2 h-16 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
    </div>
  );
}
