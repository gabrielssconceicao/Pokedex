import { PokemonType } from '@/constants/pokemon-types';
import { DamageMultiplier } from '@/interface/pokemon-damage';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

const DAMAGE_MAP: Record<DamageMultiplier, string> = {
  4: 'x4',
  2: 'x2',
  1: 'x1',
  0.5: 'x½',
  0.25: 'x¼',
  0: 'x0',
};

const formatMultiplier = (value: DamageMultiplier) => {
  return DAMAGE_MAP[value];
};

interface DamageBadgeProps {
  type: PokemonType;
  damage: DamageMultiplier;
}

export function DamageBadge({ damage, type }: DamageBadgeProps) {
  const { text, bg, border } = getPokemonColors(type);
  return (
    <div className="xs:min-w-[30%] xs:flex-1 flex w-full text-center">
      <div
        className={cn(
          'flex flex-1 items-center justify-center rounded-l-lg border-2 px-2 py-1 font-mono font-semibold tracking-wider',
          bg.default,
          text.default,
          border
        )}
      >
        {type}
      </div>

      <div
        className={cn(
          'text-md flex w-10 items-center justify-center rounded-r-lg font-mono font-bold',
          text.inverse,
          bg.inverse
        )}
      >
        {formatMultiplier(damage)}
      </div>
    </div>
  );
}
