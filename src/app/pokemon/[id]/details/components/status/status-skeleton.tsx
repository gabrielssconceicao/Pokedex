import { Skeleton } from '@/components/ui/skeleton';

export function SpeciesSkeleton() {
  return (
    <div className="space-y-3 px-2 py-1">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className="h-6 w-full rounded-md" />
      ))}
    </div>
  );
}
