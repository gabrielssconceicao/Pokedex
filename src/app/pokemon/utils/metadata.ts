import { getPokemon } from '@/api/get-pokemon';

import { PageProps } from '../interface/page-props';
type Props = {
  title: string;
} & PageProps;
export async function getMetadata({ params, title }: Props) {
  const { id } = await params;

  const pokemon = await getPokemon({ pokemon: id });

  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return {
    title: {
      default: `${title} | ${name}`,
      template: `${title} | ${name}`,
    },
  };
}
