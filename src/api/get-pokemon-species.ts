import { FetchPokemonSpecies } from '@/interface/fetch-pokemon-species';
import { EggGroup, PokemonSpecies } from '@/interface/pokemon-species';
import { createUrl } from '@/utils/create-url';
import { fetcher } from '@/utils/fetcher';

import { getPokemon } from './get-pokemon';

type Props = {
  id: number;
};

export async function getPokemonSpecies({
  id,
}: Props): Promise<PokemonSpecies> {
  const { varieties, flavor_text_entries, egg_groups } =
    await fetcher<FetchPokemonSpecies>(createUrl(`pokemon-species/${id}`));

  const variatesPromise = varieties
    .filter((v) => !v.is_default)
    .map((v) => getPokemon({ pokemon: v.pokemon.name }));

  const eggGroupsPromise = egg_groups.map((egg) => fetcher<EggGroup>(egg.url));

  const [varietiesResponse, eggGroupsResponse] = await Promise.all([
    Promise.all(variatesPromise),
    Promise.all(eggGroupsPromise),
  ]);

  const eggGroupPokemons = eggGroupsResponse.map(async (egg) => {
    const { id, name, pokemon_species } = egg;

    const pokemon = pokemon_species.map(
      async (p) => await getPokemon({ pokemon: p.name })
    );

    const pokemonData = await Promise.all(pokemon);

    return { id, name, pokemons: pokemonData };
  });

  const eggGroups = await Promise.all(eggGroupPokemons);

  return {
    flavor_text:
      flavor_text_entries.find(
        (entry) =>
          entry.language.name === 'en' && entry.version.name === 'leafgreen'
      )?.flavor_text || '',
    varieties: varietiesResponse,
    egg_groups: eggGroups,
  };
}
