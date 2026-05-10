'use client';
import { PokemonContainer } from '@/app/pokemon/components/pokemon-container';
import { PokemonParamId } from '@/interface/pokemon-param-id';

import { useMove } from '../hooks/use-moves';
import { MoveTypeSelector } from './move-type-selector';
import { PokemonTable } from './pokemon-table';

export function MoveClient({ id }: PokemonParamId) {
  const { handleValueChange, moveType } = useMove();
  return (
    <section className="flex h-full flex-col gap-2">
      <PokemonContainer title="Learns from" pokemonId={id}>
        <MoveTypeSelector pokemonId={id} onValueChange={handleValueChange} />
      </PokemonContainer>

      <PokemonContainer title="Moves" pokemonId={id}>
        <div className="h-[calc(100vh-20rem)] overflow-y-auto px-2 py-1">
          <PokemonTable query={moveType} pokemonId={id} />
        </div>
      </PokemonContainer>
    </section>
  );
}
