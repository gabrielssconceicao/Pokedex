import { FetchPokemonSpecies } from '@/interface/fetch-pokemon-species';
import { PokemonSpecies } from '@/interface/pokemon-species';
import { createUrl } from '@/utils/create-url';
import { fetcher } from '@/utils/fetcher';
import { formatPokemonSpecies } from '@/utils/format-pokemon-species';

type Props = {
  id: number;
};
export async function getPokemonSpecies({
  id,
}: Props): Promise<PokemonSpecies> {
  const species = await fetcher<FetchPokemonSpecies>(
    createUrl(`pokemon-species/${id}`)
  );

  return formatPokemonSpecies(species, 'leafgreen');
}
