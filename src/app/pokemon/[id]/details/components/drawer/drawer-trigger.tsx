import { InfoIcon } from 'lucide-react';

import { DrawerTrigger as Trigger } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';

interface Props {
  isHidden?: boolean;
  text: string;
  bg: string;
  textInverse: string;
  border?: string;
  children: string;
}

export function DrawerTrigger({
  bg,
  text,
  textInverse,
  border = '',
  isHidden = false,
  children,
}: Props) {
  return (
    <Trigger asChild>
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
        <div className="flex flex-1 items-center justify-between px-2 py-1">
          <span className="flex-1 text-center font-mono text-sm font-semibold">
            {children}
          </span>
          <InfoIcon size={20} />
        </div>
      </button>
    </Trigger>
  );
}
