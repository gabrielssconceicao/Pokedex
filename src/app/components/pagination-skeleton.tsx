import { Skeleton } from '@/components/ui/skeleton';

export function PaginationSkeleton() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-3 py-1 sm:flex-row">
      <Skeleton className="bg-accent-foreground h-4 w-1/3" />
      <div className="flex w-full flex-1 gap-2">
        <Skeleton className="bg-accent-foreground h-4 w-full" />
        <div className="flex w-full gap-2">
          <Skeleton className="bg-accent-foreground h-4 flex-1" />
          <Skeleton className="bg-accent-foreground h-4 flex-1" />
          <Skeleton className="bg-accent-foreground h-4 flex-1" />
          <Skeleton className="bg-accent-foreground h-4 flex-1" />
        </div>
      </div>
    </div>
  );
}
