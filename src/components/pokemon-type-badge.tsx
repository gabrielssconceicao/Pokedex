import { PokemonType } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

import { Badge } from './ui/badge';

type Props = {
  type: PokemonType;
  borderColor: string;
  textColor: string;
};

export function PokemonTypeBadge({ type, borderColor, textColor }: Props) {
  return (
    <Badge
      className={cn(
        'w-full border-2 bg-transparent font-mono font-semibold tracking-wide',
        borderColor,
        textColor
      )}
    >
      {type}
    </Badge>
  );
}
