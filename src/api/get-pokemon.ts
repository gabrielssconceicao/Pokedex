import { PokemonType } from '@/constants/pokemon-types';
import { FetchPokemon } from '@/interface/fetch-pokemon';
import { createUrl } from '@/utils/create-url';
import { fetcher } from '@/utils/fetcher';
import {
  formatFetchPokemon,
  FormatFetchPokemonParams,
} from '@/utils/format-fetch-pokemon';

interface FetchPokemonsParams {
  pagination: {
    limit: number;
    page: number;
  };
  filters: {
    id?: number;
    name?: string;
    types: PokemonType[];
  };
}

interface FetchPokemonsResponse {
  count: number;
  pokemons: FetchPokemon[];
}

type FetcherResponse = {
  count: number;
  results: Array<{ name: string; url: string }>;
};

export async function fetchPokemons({
  pagination: { limit, page },
  filters,
}: FetchPokemonsParams): Promise<FetchPokemonsResponse> {
  let count = 0;
  let pokemons: FormatFetchPokemonParams[] = [];

  const { id, name, types } = filters;
  const hasFilters = id || name || types.length > 0;

  if (hasFilters) {
    const { id, name, types } = filters;
    let filtered: FetcherResponse['results'];
    const { results } = await fetcher<FetcherResponse>(
      createUrl('pokemon', {
        limit: 100000,
        offset: 0,
      })
    );

    filtered = [...results];

    if (id) {
      filtered = filtered.filter((result) => {
        const parts = result.url.split('/').filter(Boolean);
        const pokemonId = parts[parts.length - 1];
        return Number(pokemonId) === id || pokemonId.includes(String(id));
      });
    }

    if (name) {
      filtered = filtered.filter((result) =>
        result.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    const resultPromises = filtered.map((r) =>
      fetcher<FormatFetchPokemonParams>(r.url)
    );

    let resolved = await Promise.all(resultPromises);

    if (types.length > 0) {
      const typeSet = new Set(types);
      resolved = resolved.filter((pokemon) =>
        pokemon.types.some((t) => typeSet.has(t.type.name))
      );
    }

    const start = (page - 1) * limit;
    pokemons = resolved.slice(start, start + limit);
  } else {
    const { count: resultCount, results } = await fetcher<FetcherResponse>(
      createUrl('pokemon', {
        limit,
        offset: (page - 1) * limit,
      })
    );

    const resultPromises = results.map((r) =>
      fetcher<FormatFetchPokemonParams>(r.url)
    );

    pokemons = await Promise.all(resultPromises);
    count = resultCount;
  }
  return {
    count,
    pokemons: pokemons.map((pokemon) => formatFetchPokemon(pokemon)),
  };
}
