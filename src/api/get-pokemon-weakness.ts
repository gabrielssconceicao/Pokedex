import {
  combineDamageRelations,
  mapDamageRelations,
} from '@/app/utils/map-damage-relations';
import { FetchPokemonTypeWeakness } from '@/interface/fetch-pokemon-type-weakness';
import { WeakenessResult } from '@/interface/pokemon-damage';
import { createUrl } from '@/utils/create-url';
import { fetcher } from '@/utils/fetcher';

type Props = {
  types: number[];
};
export async function getPokemonWeakness({
  types,
}: Props): Promise<WeakenessResult> {
  const response = types.map((t) =>
    fetcher<FetchPokemonTypeWeakness>(createUrl(`type/${t}`))
  );

  const data = await Promise.all(response);

  return combineDamageRelations(
    data.map((t) => mapDamageRelations(t.damage_relations))
  );
}
