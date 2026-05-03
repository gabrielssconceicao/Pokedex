import { DamageMultiplier, FromTo } from '@/interface/pokemon-damage';

export const damageDirectionLabels: Record<FromTo, string> = {
  from: 'Takes damage from',
  to: 'Deals damage to',
};

export const damageMultiplierLabels: Record<DamageMultiplier, string> = {
  4: '4× ',
  2: '2× ',
  1: 'Normal',
  0.5: '½× ',
  0.25: '¼× ',
  0: 'Immune',
};

export function getDamageTitle(
  direction: FromTo,
  multiplier: DamageMultiplier
) {
  const base = damageMultiplierLabels[multiplier];

  if (multiplier === 1) {
    return direction === 'from'
      ? 'Takes normal damage from'
      : 'Deals normal damage to';
  }

  if (multiplier === 0) {
    return direction === 'from' ? 'Immune to' : 'No damage to';
  }

  return direction === 'from' ? `${base} damage from` : `${base} damage to`;
}
