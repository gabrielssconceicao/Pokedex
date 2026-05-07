'use server';

import { PokemonContainer } from '../../../components/pokemon-container';
import { MoveTypeSelector } from '../components/move-type-selector';
import { PokemonTable } from '../components/pokemon-table';

type PageProps = {
  params: Promise<{ id: string; type: string }>;
};

export default async function Moves({ params }: PageProps) {
  const { id, type } = await params;

  return (
    <section className="flex h-full flex-col gap-2">
      <PokemonContainer title="Learns from" pokemonId={id}>
        <MoveTypeSelector pokemonId={id} />
      </PokemonContainer>

      <PokemonContainer title="Moves" pokemonId={id}>
        <div className="h-[calc(100vh-19rem)] overflow-y-auto px-2 py-1">
          <PokemonTable query={type} pokemonId={id} />
        </div>
      </PokemonContainer>
    </section>
  );
}
