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

  if (types.length) {
    const { filteredPokemons } = await filterPokemonsByType(types);
    pokemons = filteredPokemons;
  }

  if (id) {
    const { filteredPokemonsById } = await filterPokemonById({
      id,
      filteredPokemons: pokemons,
    });
    pokemons = filteredPokemonsById;
  }

  if (name) {
    const { filteredPokemonsName } = await filterPokemonByName({
      name,
      filteredPokemons: pokemons,
    });
    pokemons = filteredPokemonsName;
  }

  const pokemonsWithPagination = pokemons.slice(offset, offset + limit);

  return { filteredPokemons: pokemonsWithPagination, count: pokemons.length };
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
  const seen = new Map<string, PokemonResponse['pokemon']>();

  pokemonsFromTypeFlat.forEach(({ pokemon }) => {
    if (!seen.has(pokemon.name)) {
      seen.set(pokemon.name, pokemon);
    }
  });

  const filteredPokemons = Array.from(seen.values()).sort((a, b) => {
    const idA = parseInt(a.url.split('/')[6]);
    const idB = parseInt(b.url.split('/')[6]);
    return idA - idB;
  });

  return { filteredPokemons };
};

// function to filter pokemons By id, checking if it was already filtered by type
const filterPokemonById = async ({
  id,
  filteredPokemons,
}: {
  id: number;
  filteredPokemons: PokemonResponse['pokemon'][];
}) => {
  if (filteredPokemons.length) {
    const filteredPokemonsByTypeAndId = filteredPokemons.filter(pokemon =>
      pokemon.url.split('/')[6].includes(id.toString())
    );
    return { filteredPokemonsById: filteredPokemonsByTypeAndId };
  }
  const res = await api.get('pokemon?limit=100000&offset=0');
  const { results }: { results: PokemonResponse['pokemon'][] } = res.data;
  const filteredPokemonsById = results.filter(pokemon =>
    pokemon.url.split('/')[6].includes(id.toString())
  );
  return { filteredPokemonsById };
};

// function to filter pokemons By name checking if it was already filtered by id or type
const filterPokemonByName = async ({
  name,
  filteredPokemons,
}: {
  name: string;
  filteredPokemons: PokemonResponse['pokemon'][];
}) => {
  if (filteredPokemons.length) {
    const filteredPokemonsName = filteredPokemons.filter(pokemon =>
      pokemon.name.includes(name.toLocaleLowerCase())
    );
    return { filteredPokemonsName };
  }

  const res = await api.get('pokemon?limit=100000&offset=0');
  const { results }: { results: PokemonResponse['pokemon'][] } = res.data;
  const filteredPokemonsName = results.filter(pokemon =>
    pokemon.name.includes(name.toLocaleLowerCase())
  );
  return { filteredPokemonsName };
};
