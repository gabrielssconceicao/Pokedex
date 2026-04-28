import { PokemonImageSkeleton } from '@/components/pokemon-image-skeleton';
import { PokemonNameTitleSkeleton } from '@/components/pokemon-name-title-skeleton';
import { PokemonTypeBadgeSkeleton } from '@/components/pokemon-type-badge-skeleton';

export function PokemonHeaderSkeleton() {
  return (
    <div className="items-st flex w-full justify-between gap-3 px-2">
      <div className="flex w-full flex-col justify-between gap-2 p-3">
        <PokemonNameTitleSkeleton variant="header" />
        <div className="space-y-2">
          <PokemonTypeBadgeSkeleton />
          <PokemonTypeBadgeSkeleton />
        </div>
      </div>
      <PokemonImageSkeleton />
    </div>
  );
}
