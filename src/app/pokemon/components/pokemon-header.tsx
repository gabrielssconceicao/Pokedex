'use client';

import { useParams } from 'next/navigation';

import { PokemonImage } from '@/components/pokemon-image';
import { PokemonNameTitle } from '@/components/pokemon-name-title';
import { PokemonTypeBadge } from '@/components/pokemon-type-badge';
import { ThemeToggle } from '@/components/theme-toggle';
import { usePokemon } from '@/hooks/use-pokemon';
import { PokemonParamId } from '@/interface/pokemon-param-id';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

import { PokemonHeaderSkeleton } from './pokemon-header-skeleton';

export function PokemonHeader() {
  const { id } = useParams<PokemonParamId>();

  const { data: pokemon, isLoading } = usePokemon({ pokemon: id });

  if (isLoading) return <PokemonHeaderSkeleton />;

  if (!pokemon) return null;

  const { bg, text, border, img } = getPokemonColors(pokemon.types[0]);

  return isLoading ? (
    <PokemonHeaderSkeleton />
  ) : (
    <header
      className={cn(
        'flex items-stretch justify-between gap-2 rounded-2xl',
        bg.default
      )}
    >
      <div className="flex flex-1 flex-col justify-around space-y-2 px-3 py-1">
        <div className="flex flex-1 items-center justify-between gap-3">
          <ThemeToggle />
          <PokemonNameTitle
            name={pokemon.name}
            id={pokemon.id}
            textColor={text.default}
            variant="header"
          />
        </div>

        <div className="flex flex-col gap-3 px-2 py-1">
          {pokemon.types.map((type) => (
            <PokemonTypeBadge
              key={type}
              type={type}
              borderColor={border}
              textColor={text.default}
            />
          ))}
        </div>
      </div>
      <PokemonImage
        alt={pokemon.name}
        sprites={pokemon.sprites}
        bgColor={img}
        variant="header"
      />
    </header>
  );
}
