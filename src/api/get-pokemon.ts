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
  if (!Object.keys(filters).length) {
    return { count: 0, pokemons: [] };
  }

  const { count, results } = await fetcher<FetcherResponse>(
    createUrl('pokemon', {
      limit,
      offset: limit * (page - 1),
    })
  );

  const resultPromises = results.map((r) =>
    fetcher<FormatFetchPokemonParams>(r.url)
  );

  const pokemons = await Promise.all(resultPromises);

  return {
    count,
    pokemons: pokemons.map((pokemon) => formatFetchPokemon(pokemon)),
  };
}
