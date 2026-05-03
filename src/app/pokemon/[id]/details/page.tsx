'use server';

import { PokemonContainer } from '../../components/pokemon-container';
import { PageProps } from '../../interface/page-props';
import { Abilities } from './components/abilities';
import { AlternativeForms } from './components/alternative-forms';
import { EggGroups } from './components/egg-group';
import { Evolution } from './components/evolution';
import { Species } from './components/species';
import { Status } from './components/status';
export default async function Details({ params }: PageProps) {
  const { id } = await params;

  return (
    <section className="space-y-2">
      <PokemonContainer title="Species" pokemonId={id}>
        <Species id={id} />
      </PokemonContainer>
      <PokemonContainer title="Status" pokemonId={id}>
        <Status id={id} />
      </PokemonContainer>
      <PokemonContainer title="Abilities" pokemonId={id}>
        <Abilities id={id} />
      </PokemonContainer>
      <PokemonContainer title="Evolution" pokemonId={id}>
        <Evolution id={id} />
      </PokemonContainer>
      <PokemonContainer title="Alternative Forms" pokemonId={id}>
        <AlternativeForms id={id} />
      </PokemonContainer>
      <PokemonContainer title="Egg GGroups" pokemonId={id}>
        <EggGroups id={id} />
      </PokemonContainer>
    </section>
  );
}
