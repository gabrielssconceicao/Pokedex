import { Skeleton } from '@/components/ui/skeleton';

export function WeaknessSkeleton() {
  return Array.from({ length: 2 }).map((_, index) => (
    <div
      className="flex w-full flex-col items-center justify-center gap-3 px-3 py-1"
      key={index}
    >
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-30 w-full" />
    </div>
  ));
}
