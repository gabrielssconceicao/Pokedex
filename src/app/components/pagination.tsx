'use client';
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';

import { Button } from '@/components/ui/button';

interface PaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  label: string;
  icon: IconName;
}

function PaginationButton(props: PaginationButtonProps) {
  return (
    <Button
      className="h-8 w-8 p-0"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <span className="sr-only">{props.label}</span>
      <DynamicIcon name={props.icon} className="h-3 w-3" />
    </Button>
  );
}

export function Pagination() {
  return (
    <nav
      className="border-t-foreground flex flex-col items-center justify-between gap-3 border-t py-1 sm:flex-row"
      aria-label="Pagination"
    >
      <span className="font-semi text-muted-foreground font-mono text-sm">
        Total of 100 items
      </span>

      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6 lg:gap-8">
        <p className="text-muted-foreground flex items-center justify-center gap-1 font-mono text-sm">
          Página
          <span>1</span>
          de
          <span>1</span>
        </p>

        <div className="flex items-center gap-2">
          <PaginationButton
            disabled
            onClick={() => {}}
            label="First Page"
            icon={'arrow-left-to-line'}
          />
          <PaginationButton
            disabled
            onClick={() => {}}
            label="Previous Page"
            icon={'arrow-left'}
          />
          <PaginationButton
            disabled
            onClick={() => {}}
            label="Next Page"
            icon={'arrow-right'}
          />
          <PaginationButton
            disabled
            onClick={() => {}}
            label="Next Page"
            icon={'arrow-right-to-line'}
          />
        </div>
      </div>
    </nav>
  );
}
