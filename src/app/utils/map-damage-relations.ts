import { PokemonType } from '@/constants/pokemon-types';
import { FetchPokemonTypeWeakness } from '@/interface/fetch-pokemon-type-weakness';
import {
  DamageMultiplier,
  DamageResult,
  WeakenessResult,
} from '@/interface/pokemon-damage';

const ALL_TYPES: PokemonType[] = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
];

export function mapDamageRelations(
  damage: FetchPokemonTypeWeakness['damage_relations']
): DamageResult {
  const result: Partial<DamageResult> = {};

  const extract = (key: keyof FetchPokemonTypeWeakness['damage_relations']) =>
    damage[key].map((t) => t.name);

  const doubleFrom = extract('double_damage_from');
  const halfFrom = extract('half_damage_from');
  const noFrom = extract('no_damage_from');

  const affected = new Set([...doubleFrom, ...halfFrom, ...noFrom]);

  const normalFrom = ALL_TYPES.filter((t) => !affected.has(t));

  result.double_damage_from = doubleFrom;
  result.double_damage_to = extract('double_damage_to');
  result.half_damage_from = halfFrom;
  result.half_damage_to = extract('half_damage_to');
  result.no_damage_from = noFrom;
  result.no_damage_to = extract('no_damage_to');
  result.normal_damage_from = normalFrom;

  return result as DamageResult;
}

function createMultiplierMap(): Record<PokemonType, number> {
  return Object.fromEntries(ALL_TYPES.map((t) => [t, 1])) as Record<
    PokemonType,
    number
  >;
}

function applyMultiplier(
  map: Record<PokemonType, number>,
  types: PokemonType[],
  multiplier: number
) {
  for (const type of types) {
    map[type] *= multiplier;
  }
}

function applyDamageRelations(
  fromMap: Record<PokemonType, number>,
  toMap: Record<PokemonType, number>,
  dmg: DamageResult
) {
  // dano recebido
  applyMultiplier(fromMap, dmg.double_damage_from, 2);
  applyMultiplier(fromMap, dmg.half_damage_from, 0.5);
  applyMultiplier(fromMap, dmg.no_damage_from, 0);

  // dano causado
  applyMultiplier(toMap, dmg.double_damage_to, 2);
  applyMultiplier(toMap, dmg.half_damage_to, 0.5);
  applyMultiplier(toMap, dmg.no_damage_to, 0);
}

function buildCombinedMaps(damages: DamageResult[]) {
  const fromMap = createMultiplierMap();
  const toMap = createMultiplierMap();

  for (const dmg of damages) {
    applyDamageRelations(fromMap, toMap, dmg);
  }

  return { fromMap, toMap };
}

function groupByMultiplier(
  map: Record<PokemonType, number>
): Record<DamageMultiplier, PokemonType[]> {
  const result: Record<DamageMultiplier, PokemonType[]> = {
    0: [],
    0.25: [],
    0.5: [],
    1: [],
    2: [],
    4: [],
  };

  for (const type of ALL_TYPES) {
    const value = map[type];

    if (
      value === 0 ||
      value === 0.25 ||
      value === 0.5 ||
      value === 1 ||
      value === 2 ||
      value === 4
    ) {
      result[value].push(type);
    }
  }

  return result;
}

export function combineDamageRelations(
  damages: DamageResult[]
): WeakenessResult {
  const { fromMap, toMap } = buildCombinedMaps(damages);

  return {
    from: groupByMultiplier(fromMap),
    to: groupByMultiplier(toMap),
  };
}
