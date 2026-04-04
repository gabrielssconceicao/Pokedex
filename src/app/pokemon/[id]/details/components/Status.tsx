import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { getPokemonColors } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

export function Status() {
  const { text, textReverse, bg, reverseBg } = getPokemonColors('fire');
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
        <ToggleGroupItem value="base" aria-label="Base Status">
          Base Status
        </ToggleGroupItem>
        <ToggleGroupItem value="min" aria-label="Minimum Status">
          Minimum Status
        </ToggleGroupItem>
        <ToggleGroupItem value="max" aria-label="Maximum Status">
          Maximum Status
        </ToggleGroupItem>
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
                reverseBg,
                textReverse
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
