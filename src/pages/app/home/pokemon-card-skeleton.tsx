import { Skeleton } from '@/components/ui/skeleton';

export function PokemonCardSkeleton() {
  return Array.from({ length: 20 }).map((_, i) => (
    <div
      className="flex h-[400px] w-72 flex-col items-center gap-3 rounded-md border p-2"
      key={i}
    >
      <Skeleton className="h-9 w-full" />
      <Skeleton className="h-56 w-60" />
      <div className="flex h-11 w-60 items-center justify-center gap-2 px-3 py-2">
        <Skeleton className="h-7 w-24" />
        <Skeleton className="h-7 w-24" />
      </div>
      <Skeleton className="h-9 w-full" />
    </div>
  ));
}
