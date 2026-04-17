import { cn } from '@/lib/utils';

import { Variant } from './pokemon-card';

type Props = {
  name: string;
  id: number;
  textColor: string;
  variant: Variant;
};
export function PokemonNameTitle({ name, id, textColor, variant }: Props) {
  const isCard = variant === 'card';
  return (
    <div
      className={cn(
        'flex',
        isCard
          ? 'flex-col items-center justify-center gap-0.5'
          : 'flex-row items-center justify-between px-2'
      )}
    >
      <span className={cn('text-md font-mono', textColor)}>
        #{String(id).padStart(3, '0')}
      </span>
      <h2 className={cn('text-md text-center font-mono', textColor)}>{name}</h2>
    </div>
  );
}
