import { InfoIcon } from 'lucide-react';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { getPokemonColors } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

import { PokemonCard } from '../../../components/PokemonCard';

const pokemons = Array(20).fill({
  id: 3,
  image: '/pokemon-egg.png',
  name: 'Charizard',
  types: ['fire'],
  evolutionDetail: 'Level',
});

export function EggGroupDrawer() {
  const { text, bg } = getPokemonColors('fire');
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          type="button"
          className={cn(
            'flex flex-1 items-center justify-center gap-2 rounded-lg px-1 py-2',
            text,
            bg
          )}
        >
          <span className="w-full text-center font-mono text-xs">
            Egg Group
          </span>
          <InfoIcon size={20} />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Water Egg</DrawerTitle>
          <DrawerDescription>Pokemnons egg Group</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-wrap items-center justify-center gap-3 overflow-y-auto">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
