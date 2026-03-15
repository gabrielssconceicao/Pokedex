import { PokemonContainer } from '../../components/PokemonContainer';
import { AlternativeForms } from './components/AlternativeForms';
import { Evolution } from './components/Evolution';
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
      <PokemonContainer title="Evolution">
        <Evolution />
      </PokemonContainer>
      <PokemonContainer title="Alternative Forms">
        <AlternativeForms />
      </PokemonContainer>
    </section>
  );
}
