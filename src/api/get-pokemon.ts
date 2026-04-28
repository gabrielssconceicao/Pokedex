import { FormatPokemonParams } from '@/interface/format-pokemon';
import { Pokemon } from '@/interface/pokemon';
import { createUrl } from '@/utils/create-url';
import { fetcher } from '@/utils/fetcher';
import { formatPokemon } from '@/utils/format-pokemon';

type Props = {
  pokemon: string;
};
export async function getPokemon({ pokemon }: Props): Promise<Pokemon> {
  const data = await fetcher<FormatPokemonParams>(
    createUrl(`pokemon/${pokemon}`)
  );
  return formatPokemon(data);
}
