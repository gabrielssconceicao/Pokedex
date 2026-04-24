import { PokemonType } from '@/constants/pokemon-types';

// utils/parse-pokemon-search-params.ts
export function parsePokemonSearchParams(searchParams: {
  id?: string;
  name?: string;
  type?: string | string[];
  page?: string;
  perPage?: string;
}) {
  const types = Array.isArray(searchParams.type)
    ? searchParams.type
    : searchParams.type
      ? [searchParams.type]
      : [];

  const parsedId = Number(searchParams.id);
  const parsedPage = Number(searchParams.page);
  const parsedPerPage = Number(searchParams.perPage);

  return {
    id: !isNaN(parsedId) && parsedId > 0 ? parsedId : undefined,
    page: !isNaN(parsedPage) && parsedPage > 0 ? parsedPage : 1,
    perPage: !isNaN(parsedPerPage) && parsedPerPage > 0 ? parsedPerPage : 25,
    name: searchParams.name,
    types: types as PokemonType[],
  };
}
