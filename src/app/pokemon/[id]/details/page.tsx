'use client';
import { useParams } from 'next/navigation';

import { usePokemon } from '@/hooks/use-pokemon';
import { PokemonParamId } from '@/interface/pokemon-param-id';

import { PokemonContainer } from '../../components/pokemon-container';
import { Abilities } from './components/abilities';
import { AlternativeForms } from './components/alternative-forms';
import { EggGroups } from './components/egg-group';
import { Evolution } from './components/evolution';
import { Species } from './components/species';
import { Status } from './components/status';
export default function Details() {
  const { id } = useParams<PokemonParamId>();
  const { data } = usePokemon({ pokemon: id });

  if (!data) return null;

  const { pokemon, typeColors } = data;

  return (
    <section>
      <PokemonContainer title="Species">
        <Species height={pokemon.height} weight={pokemon.weight} />
      </PokemonContainer>
    </section>
  );
}
// export default function Details() {
//   return (
//     <section>
//       <PokemonContainer title="Species">
//         <Species />
//       </PokemonContainer>
//       <PokemonContainer title="Status">
//         <Status />
//       </PokemonContainer>
//       <PokemonContainer title="Habilities">
//         <Abilities />
//       </PokemonContainer>
//       <PokemonContainer title="Evolution">
//         <Evolution />
//       </PokemonContainer>
//       <PokemonContainer title="Alternative Forms">
//         <AlternativeForms />
//       </PokemonContainer>
//       <PokemonContainer title="Egg Groups">
//         <EggGroups />
//       </PokemonContainer>
//     </section>
//   );
// }
