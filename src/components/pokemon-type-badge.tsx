import { PokemonType } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

import { Badge } from './ui/badge';

type Props = {
  type: PokemonType;
  borderCoor: string;
  textColor: string;
};

export function PokemonTypeBadge({ type, borderCoor, textColor }: Props) {
  return (
    <Badge
      className={cn(
        'w-full border-2 bg-transparent font-mono font-semibold tracking-wide',
        borderCoor,
        textColor
      )}
    >
      {type}
    </Badge>
  );
}
