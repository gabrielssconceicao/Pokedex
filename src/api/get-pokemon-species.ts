import { FetchPokemonSpecies } from '@/interface/fetch-pokemon-species';
import { EvolutionChainResponse } from '@/interface/pokemon-evolution';
import { EggGroup, PokemonSpecies } from '@/interface/pokemon-species';
import { VersionName } from '@/interface/version-name';
import { createUrl } from '@/utils/create-url';
import { fetcher } from '@/utils/fetcher';
import { getEvolutionChain } from '@/utils/format-evolution-chain';

import { getPokemonData } from './get-pokemon';

type Props = {
  id: number;
  version: VersionName;
};

export async function getPokemonSpecies({
  id,
  version,
}: Props): Promise<PokemonSpecies> {
  const { varieties, flavor_text_entries, egg_groups, evolution_chain } =
    await fetcher<FetchPokemonSpecies>(createUrl(`pokemon-species/${id}`));

  const variatesPromise = varieties
    .filter((v) => !v.is_default)
    .map((v) =>
      getPokemonData({ pokemon: v.pokemon.name })
        .then((res) => res)
        .catch(() => null)
    );

  const eggGroupsPromise = egg_groups.map((egg) => fetcher<EggGroup>(egg.url));

  const [varietiesResponse, eggGroupsResponse] = await Promise.all([
    (await Promise.all(variatesPromise)).filter((v) => v !== null),
    Promise.all(eggGroupsPromise),
  ]);

  const eggGroupPokemons = eggGroupsResponse.map(async (egg) => {
    const { id, name, pokemon_species } = egg;

    const pokemon = pokemon_species.map(async (p) =>
      getPokemonData({ pokemon: p.name })
        .then((res) => res)
        .catch(() => null)
    );

    const pokemonData = (await Promise.all(pokemon)).filter((p) => p !== null);

    return { id, name, pokemons: pokemonData };
  });

  const eggGroups = (await Promise.all(eggGroupPokemons)).map((e) => {
    const { id, name, pokemons } = e;
    return { id, name, pokemons: pokemons.filter((p) => p !== null) };
  });

  const evolution = await fetcher<EvolutionChainResponse>(evolution_chain.url);

  const chain = await getEvolutionChain(evolution);

  const flavor_text = flavor_text_entries.find(
    (entry) => entry.version.name === version && entry.language.name === 'en'
  )?.flavor_text;

  return {
    flavor_text: flavor_text || '',
    varieties: varietiesResponse,
    egg_groups: eggGroups,
    evolution_chain: chain,
  };
}
