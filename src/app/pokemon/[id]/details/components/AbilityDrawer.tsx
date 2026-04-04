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

import { AbilityContainer } from './AbilityContainer';

interface AbilityDrawerProps {
  isHidden?: boolean;
}

const hability = {
  name: 'Hability name',
  description:
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste voluptates doloribus ipsa vel impedit suscipit, animi quod!',
};

export function AbilityDrawer({ isHidden = false }: AbilityDrawerProps) {
  const { text, bg, border, textInverse } = getPokemonColors('fire');
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          type="button"
          className={cn(
            'flex flex-1 items-stretch justify-center gap-2 rounded-lg border',
            isHidden ? textInverse : text,
            !isHidden && bg,
            isHidden && border
          )}
        >
          {isHidden && (
            <div
              className={cn(
                'flex items-center justify-center rounded-l-lg border-r px-2 py-1 text-xs',
                bg,
                text,
                border
              )}
            >
              Hidden
            </div>
          )}
          <div className="flex flex-1 items-center justify-between px-2">
            <span className="font-sm flex-1 text-center font-mono font-bold">
              Egg Group
            </span>
            <InfoIcon size={20} />
          </div>
        </button>
      </DrawerTrigger>
      <DrawerContent className={cn(bg)}>
        <DrawerHeader>
          <DrawerTitle className={cn(text)}>Ability Name</DrawerTitle>
          <DrawerDescription className={cn(text)}>
            Pokemon name ability
          </DrawerDescription>
        </DrawerHeader>
        <section className="space-y-3 bg-slate-200/30 px-5 py-4">
          <AbilityContainer
            color={text}
            title={hability.name}
            description={hability.description}
          />
          <AbilityContainer
            color={text}
            title={hability.name}
            description={hability.description}
          />
        </section>
      </DrawerContent>
    </Drawer>
  );
}
