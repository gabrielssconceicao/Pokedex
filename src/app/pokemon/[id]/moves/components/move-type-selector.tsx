'use client';
import { usePathname, useRouter } from 'next/navigation';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { PokemonType } from '@/constants/pokemon-types';
import { usePokemon } from '@/hooks/use-pokemon';
import { LearnMove } from '@/interface/pokemon-moves';
import { cn } from '@/lib/utils';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

const moveOptions: Array<{ value: LearnMove; label: string }> = [
  { value: 'level-up', label: 'Level Up' },
  { value: 'machine', label: 'TM/HM' },
  { value: 'egg', label: 'Egg' },
  { value: 'tutor', label: 'Tutor' },
];

type MoveTypeSelectorProps = {
  pokemonId: string;
};

export function MoveTypeSelector({ pokemonId }: MoveTypeSelectorProps) {
  const { data: pokemon } = usePokemon({ pokemon: pokemonId });
  const { bg, text, active } = getPokemonColors(
    pokemon?.types[0] as PokemonType
  );
  const router = useRouter();
  const pathname = usePathname();

  function handleValueChange(value: string) {
    const params = new URLSearchParams();
    params.set('learn', value);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <ToggleGroup
      onValueChange={handleValueChange}
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
            'min-w-fit flex-1 cursor-pointer px-1 font-mono font-semibold transition-colors',
            bg,
            text,
            active
          )}
        >
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
