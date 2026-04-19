'use client';

import { type IconName } from 'lucide-react/dynamic';

import { PaginationButton } from './pagination-button';

type ButtonActions = 'first' | 'prev' | 'next' | 'last';

const panginationButtons: Array<{
  label: string;
  icon: IconName;
  action: ButtonActions;
}> = [
  {
    label: 'First Page',
    icon: 'arrow-left-to-line',
    action: 'first',
  },
  {
    label: 'Previous Page',
    icon: 'arrow-left',
    action: 'prev',
  },
  {
    label: 'Next Page',
    icon: 'arrow-right',
    action: 'next',
  },
  {
    label: 'Last Page',
    icon: 'arrow-right-to-line',
    action: 'last',
  },
];

export function Pagination() {
  return (
    <nav
      className="border-t-foreground flex flex-col items-center justify-between gap-3 border-t py-1 sm:flex-row"
      aria-label="Pagination"
    >
      <span className="font-semi text-muted-foreground font-mono text-sm">
        Total of 100 items
      </span>

      <div className="xs:justify-around xs:px-2 flex w-full flex-1 flex-row items-center justify-between gap-2 sm:gap-6 lg:gap-8">
        <p className="text-muted-foreground flex items-center justify-center gap-1 font-mono text-sm">
          <span className="max-xs:hidden">Página</span>
          <span className="text-primary">1</span>
          de
          <span className="text-accent-foreground/30">1</span>
        </p>

        <div className="flex items-center gap-2">
          {panginationButtons.map(({ label, icon, action }) => (
            <PaginationButton
              key={action}
              disabled
              onClick={() => {}}
              label={label}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
