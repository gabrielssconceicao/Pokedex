import { PokemonContainer } from '../../components/PokemonContainer';
import { Species } from './components/Species';
import { Status } from './components/Status';

export default function Details() {
  return (
    <section>
      <PokemonContainer title="Species">
        <Species />
      </PokemonContainer>
      <PokemonContainer title="Status">
        <Status />
      </PokemonContainer>
      <PokemonContainer title="Evolution">1</PokemonContainer>
    </section>
  );
}
