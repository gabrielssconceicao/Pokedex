import { PokemonTypeBadge } from '@/components/pokemon-type-badge';
import { ContestType, DamageClass } from '@/constants/move-types';
import { PokemonType } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

type Props = {
  textColor: string;
  borderColor: string;
  type: PokemonType | DamageClass | ContestType;
  label: string;
};

export function BagdeCard({ borderColor, textColor, label, type }: Props) {
  return (
    <div className="flex w-full flex-1 flex-col items-center space-y-1">
      <span
        className={cn('font-mono text-xs font-medium capitalize', textColor)}
      >
        {label}
      </span>
      <PokemonTypeBadge
        borderColor={borderColor}
        textColor={textColor}
        type={type}
      />
    </div>
  );
}
