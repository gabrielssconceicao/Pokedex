import { PokemonType } from '@/constants/pokemon-types';

export type DamageKey =
  | 'double_damage_from'
  | 'double_damage_to'
  | 'half_damage_from'
  | 'half_damage_to'
  | 'no_damage_from'
  | 'no_damage_to'
  | 'normal_damage_from';

export type DamageResult = Record<DamageKey, PokemonType[]>;

export type DamageMultiplier = 0 | 0.25 | 0.5 | 1 | 2 | 4;

export type FromTo = 'from' | 'to';

export interface WeakenessResult {
  from: Record<DamageMultiplier, PokemonType[]>;
  to: Record<DamageMultiplier, PokemonType[]>;
}
