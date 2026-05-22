export function getPokemonSearchParams(searchParams: URLSearchParams) {
  return {
    id: searchParams.get('id') || undefined,
    name: searchParams.get('q') || undefined,
    type: searchParams.getAll('type'),
    perPage: searchParams.get('perPage') || undefined,
    page: searchParams.get('page') || undefined,
  };
}
