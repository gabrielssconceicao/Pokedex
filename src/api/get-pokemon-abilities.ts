import { FetchAbilily } from '@/interface/fetch-pokemon-abilities';
import { Pokemon } from '@/interface/pokemon';
import { fetcher } from '@/utils/fetcher';

import { getPokemonData } from './get-pokemon';

type Props = {
  abilities: Pokemon['abilities'];
};

export async function getPokemonAbilities({ abilities }: Props) {
  const abibitiesPromise = abilities.map(async (ability) => {
    const data = await fetcher<FetchAbilily>(ability.abilityUrl);
    return { ability: data, is_hidden: ability.is_hidden };
  });

  const abilitiesData = await Promise.all(abibitiesPromise);

  const abilitiesWithPokemonsPromise = abilitiesData.map(
    async ({ ability, is_hidden }) => {
      const { effect_entries, id, name, pokemon } = ability;

      const pokemonsPromise = pokemon.map(async (p) =>
        getPokemonData({ pokemon: p.pokemon.name })
          .then((res) => res)
          .catch(() => null)
      );

      const pokemons = (await Promise.all(pokemonsPromise)).filter(
        (d) => d !== null
      );

      return { is_hidden, id, name, effect_entries, pokemons };
    }
  );

  const abilitiesWithPokemons = await Promise.all(abilitiesWithPokemonsPromise);

  return abilitiesWithPokemons.map(({ effect_entries, ...rest }) => {
    return {
      ...rest,
      effect_entries: effect_entries.find((e) => e.language.name === 'en'),
    };
  });
}
