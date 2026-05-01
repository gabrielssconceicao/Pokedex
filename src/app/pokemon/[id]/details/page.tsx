'use server';
import { PokemonParamId } from '@/interface/pokemon-param-id';

import { PokemonContainer } from '../../components/pokemon-container';
import { Abilities } from './components/abilities';
import { AlternativeForms } from './components/alternative-forms';
import { EggGroups } from './components/egg-group';
import { Evolution } from './components/evolution';
import { Species } from './components/species';
import { Status } from './components/status';

type DetailsProps = {
  params: Promise<PokemonParamId>;
};

export default async function Details({ params }: DetailsProps) {
  const { id } = await params;

  return (
    <section className="space-y-2">
      <PokemonContainer title="Species" pokemomId={id}>
        <Species id={id} />
      </PokemonContainer>
      <PokemonContainer title="Status" pokemomId={id}>
        <Status id={id} />
      </PokemonContainer>
      <PokemonContainer title="Abilities" pokemomId={id}>
        <Abilities id={id} />
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
