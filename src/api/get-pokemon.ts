import { Pokemon } from '@/interface/pokemon';
import { createUrl } from '@/utils/create-url';
import { fetcher } from '@/utils/fetcher';

type Props = {
  pokemon: string;
};
export async function getPokemon({ pokemon }: Props): Promise<Pokemon | null> {
  try {
    const data = await fetcher<Pokemon>(createUrl(`pokemon/${pokemon}`));
    console.log({ data });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
