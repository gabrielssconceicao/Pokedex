import axios from 'axios';

import { api } from '@/lib/axios';

import { GetPokemonsParams } from './get-pokemons';
type PokemonResponse = {
  pokemon: {
    name: string;
    url: string;
  };
};

export async function getFilteredPokemons({
  limit,
  offset,
  filters: { name, id, types },
}: GetPokemonsParams) {
  let pokemons: PokemonResponse['pokemon'][] = [];

  const hasTypeFilter = !!types.length;

  if (hasTypeFilter) {
    const { filteredPokemons } = await filterPokemonsByType(types);
    pokemons = filteredPokemons;
  }

  if (id) {
    if (hasTypeFilter) {
      const filteredPokemonsByTypeAndName = pokemons.filter(pokemon =>
        pokemon.url.split('/')[6].includes(id.toString())
      );
      pokemons = filteredPokemonsByTypeAndName;
    } else {
      const res = await api.get('pokemon?limit=100000&offset=0');
      const { results }: { results: PokemonResponse['pokemon'][] } = res.data;
      const filteredPokemonsById = results.filter(pokemon =>
        pokemon.url.split('/')[6].includes(id.toString())
      );
      pokemons = filteredPokemonsById;
    }

    console.log({ filteredPokemonsById: pokemons });
  }
}

// function to filter pokemons By type
const filterPokemonsByType = async (
  types: GetPokemonsParams['filters']['types']
) => {
  const pokemonsFromTypePromise = types.map(async type => {
    const res = await api.get(`/type/${type}`);
    const { pokemon } = res.data as {
      pokemon: PokemonResponse[];
    };
    return pokemon;
  });

  const pokemonsFromType = await Promise.all(pokemonsFromTypePromise);

  const pokemonsFromTypeFlat = pokemonsFromType.flat();
  console.log({ pokemonsFromTypeFlat });
  const seen = new Map<string, PokemonResponse['pokemon']>();

  pokemonsFromTypeFlat.forEach(({ pokemon }) => {
    if (!seen.has(pokemon.name)) {
      seen.set(pokemon.name, pokemon);
    }
  });

  const filteredPokemons = Array.from(seen.values());

  return { filteredPokemons };
};
// function to filter pokemons By id, checking if it was already filtered by type

// function to filter pokemons By name checking if it was already filtered by id or type
