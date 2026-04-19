import { PokemonContainer } from '../../components/pokemon-container';
import { MoveTypeSelector } from './components/move-type-selector';
import { PokemonTable } from './components/pokemon-table';

export default function Moves() {
  return (
    <section className="flex h-full flex-col gap-2">
      <PokemonContainer title="Learns from">
        <MoveTypeSelector />
      </PokemonContainer>

      <PokemonContainer>
        <div className="h-[calc(100vh-19rem)] overflow-y-auto px-2 py-1">
          <PokemonTable />
        </div>
      </PokemonContainer>
    </section>
  );
}
