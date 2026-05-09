import { POKEMON_TYPES } from '@/constants/colors';
import {
  CONTEST_TYPES,
  ContestType,
  DAMAGE_CLASSES,
  DamageClass,
  TypeKeys,
} from '@/constants/move-types';
import { PokemonType } from '@/constants/pokemon-types';

export function getPokemonColors(type: PokemonType) {
  return POKEMON_TYPES[type];
}

export function getContestColors(type: ContestType) {
  return CONTEST_TYPES[type];
}

export function getDamageClassColors(type: DamageClass) {
  return DAMAGE_CLASSES[type];
}

export function getColor(key: string, type: string): TypeKeys {
  switch (key) {
    case 'type':
      const { border, text } = getPokemonColors(type as PokemonType);
      return { border, text };
    case 'competition':
      return getContestColors(type as ContestType);
    case 'category':
      return getDamageClassColors(type as DamageClass);
  }
}
