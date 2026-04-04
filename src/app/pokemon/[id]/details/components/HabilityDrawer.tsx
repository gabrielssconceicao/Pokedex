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

interface Props {
  isHidden?: boolean;
}

export function HabilityDrawer({ isHidden = false }: Props) {
  const { text, bg, border, textInverse } = getPokemonColors('fire');
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div
          className={cn(
            'flex flex-1 items-stretch justify-center gap-2 overflow-auto rounded-lg border-2',
            isHidden ? textInverse : text,
            isHidden ? '' : bg,
            isHidden ? border : ''
          )}
        >
          {isHidden && (
            <div className={cn('px-2 py-1 text-xs', bg, text)}>Hidden</div>
          )}
          <div className="flex flex-1 items-center justify-between px-2">
            <span className="font-sm flex-1 text-center font-mono font-bold">
              Egg Group
            </span>
            <InfoIcon size={20} />
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className={cn(bg)}>
        <DrawerHeader>
          <DrawerTitle className={cn(text)}>Ability Name</DrawerTitle>
          <DrawerDescription className={cn(text)}>
            Pokemon name ability
          </DrawerDescription>
        </DrawerHeader>
        <section className="bg-slate-200/30">1</section>
      </DrawerContent>
    </Drawer>
  );
}
