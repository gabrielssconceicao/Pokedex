import { cn } from '@/lib/utils';

import { Variant } from './pokemon-card';

type Props = {
  name: string;
  id: number;
  textColor: string;
  variant?: Variant | 'header';
};
export function PokemonNameTitle({
  name,
  id,
  textColor,
  variant = 'default',
}: Props) {
  const variantStyles: Record<Variant | 'header', string> = {
    default:
      'flex-row items-center xs:justify-between xs:flex-row px-2 flex-col ',
    card: 'flex-col items-center justify-center gap-0.5',
    header:
      'flex-1 justify-between xs:flex-row xs:text-xl xs:font-semibold break-all flex-col items-center',
  };
  return (
    <div className={cn('flex', variantStyles[variant])}>
      <span className={cn('xs:text-md font-mono text-sm', textColor)}>
        #{String(id).padStart(3, '0')}
      </span>
      <h2
        className={cn(
          'text-md text-center font-mono font-semibold capitalize',
          textColor
        )}
      >
        {name}
      </h2>
    </div>
  );
}
