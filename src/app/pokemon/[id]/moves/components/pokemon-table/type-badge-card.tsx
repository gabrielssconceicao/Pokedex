import { PokemonTypeBadge } from '@/components/pokemon-type-badge';
import { PokemonType } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

type Props = {
  textColor: string;
  borderColor: string;
  type: PokemonType;
  label: string;
};

export function BagdeCard({ borderColor, textColor, label, type }: Props) {
  return (
    <div className="flex w-full flex-1 flex-col items-center space-y-1">
      <span className={cn('font-mono text-xs font-light', textColor)}>
        {label}
      </span>
      <PokemonTypeBadge
        borderCoor={borderColor}
        textColor={textColor}
        type={type}
      />
    </div>
  );
}
