import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { getPokemonColors } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

import { PokemonContainer } from '../../components/PokemonContainer';

const moveOptions = [
  { value: 'level-up', label: 'Level Up' },
  { value: 'tm-hm', label: 'TM/HM' },
  { value: 'egg', label: 'Egg' },
];

export default function Moves() {
  const { bg, text, active } = getPokemonColors('fire');

  return (
    <section>
      <PokemonContainer>
        <ToggleGroup
          type="single"
          size="sm"
          defaultValue="level-up"
          variant="default"
          spacing={2}
          className="mx-auto flex w-full flex-wrap items-center justify-around gap-3 py-1"
        >
          {moveOptions.map((option) => (
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
      </PokemonContainer>
    </section>
  );
}
