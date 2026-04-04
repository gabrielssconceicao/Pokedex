import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { getPokemonColors } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

const statusOptions = [
  { value: 'base', label: 'Base Status' },
  { value: 'min', label: 'Minimum Status' },
  { value: 'max', label: 'Maximum Status' },
];

export function Status() {
  const { text, textInverse, bg, bgInverse, active } = getPokemonColors('fire');
  return (
    <div className="py-3">
      <ToggleGroup
        type="single"
        size="sm"
        defaultValue="base"
        variant="default"
        spacing={2}
        className="mx-auto flex flex-wrap items-center justify-center gap-2"
      >
        {statusOptions.map((option) => (
          <ToggleGroupItem
            key={option.value}
            value={option.value}
            aria-label={option.label}
            className={cn(
              'min-w-fit flex-1 px-1 font-mono font-semibold transition-colors',
              bg,
              text,
              active
            )}
          >
            {option.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <section className="flex flex-col gap-3 px-2 py-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="flex items-stretch" key={index}>
            <span
              className={cn(
                'flex w-12 items-center justify-center rounded-l-2xl text-center font-mono text-xs font-semibold sm:w-18',
                bg,
                text
              )}
            >
              PS
            </span>
            <div
              className={cn(
                'flex items-center justify-end rounded-r-2xl px-4',
                bgInverse,
                textInverse
              )}
              style={{
                width: '40%',
              }}
            >
              40
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
