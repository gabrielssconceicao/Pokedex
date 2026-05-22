import { InfoIcon } from 'lucide-react';

import { DrawerTrigger as Trigger } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';

interface Props {
  isHidden?: boolean;
  text: { default: string; inverse: string };
  bg: string;
  border?: string;
  children: string;
}

export function DrawerTrigger({
  bg,
  text,
  border = '',
  isHidden = false,
  children,
}: Props) {
  return (
    <Trigger asChild>
      <button
        type="button"
        className={cn(
          'flex min-w-fit flex-1 cursor-pointer items-stretch justify-center gap-2 rounded-lg border-2',
          isHidden ? text.inverse : text,
          !isHidden && bg,
          isHidden && border
        )}
      >
        {isHidden && (
          <div
            className={cn(
              'flex items-center justify-center rounded-l-lg border-r px-2 py-1 text-xs font-semibold',
              bg,
              text,
              border
            )}
          >
            hidden
          </div>
        )}
        <div className="flex flex-1 items-center justify-between gap-1 px-2 py-1">
          <span className="flex-1 text-center font-mono text-xs font-semibold capitalize sm:text-sm">
            {children}
          </span>
          <InfoIcon size={20} />
        </div>
      </button>
    </Trigger>
  );
}
