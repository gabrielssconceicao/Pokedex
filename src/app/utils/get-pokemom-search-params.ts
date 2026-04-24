export function getPokemonSearchParams(searchParams: URLSearchParams) {
  return {
    id: searchParams.get('id') || undefined,
    name: searchParams.get('name') || undefined,
    type: searchParams.getAll('type'),
    perPage: searchParams.get('perPage') || undefined,
    page: searchParams.get('page') || undefined,
  };
}
