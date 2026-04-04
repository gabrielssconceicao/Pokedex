import { getPokemonColors, PokemonType } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

type DamageValues = 4 | 2 | 1 | 0.5 | 0.25;

interface DamageBadgeProps {
  type: PokemonType;
  damage: DamageValues;
}

const formatMultiplier = (value: DamageValues) => {
  const map: Record<DamageValues, string> = {
    4: 'x4',
    2: 'x2',
    1: 'x1',
    0.5: 'x½',
    0.25: 'x¼',
  };

  return map[value];
};

export function DamageBadge({ damage, type }: DamageBadgeProps) {
  const { text, bg, bgInverse, textInverse } = getPokemonColors(type);
  return (
    <div className="xs:min-w-[30%] xs:flex-1 flex w-40 overflow-hidden rounded-lg text-center">
      <div
        className={cn(
          'flex flex-1 items-center justify-center px-2 py-1 font-mono',
          bg,
          text
        )}
      >
        {type}
      </div>

      <div
        className={cn(
          'text-md flex w-10 items-center justify-center font-mono font-bold',
          bgInverse,
          textInverse
        )}
      >
        {formatMultiplier(damage)}
      </div>
    </div>
  );
}
