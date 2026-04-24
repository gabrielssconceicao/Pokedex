import { PokemonCardSkeleton } from '@/components/pokemon-card-skeleton';

export function PokemonListSkeleton() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      {Array.from({ length: 5 }).map((_, index) => (
        <PokemonCardSkeleton key={index} variant="default" />
      ))}
    </div>
  );
}
