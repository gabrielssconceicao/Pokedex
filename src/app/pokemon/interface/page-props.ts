import { PokemonParamId } from '@/interface/pokemon-param-id';

export interface PageProps {
  params: Promise<PokemonParamId>;
}
