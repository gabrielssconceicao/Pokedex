import { DynamicIcon, type IconName } from 'lucide-react/dynamic';

import { Button } from '@/components/ui/button';

interface PaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  label: string;
  icon: IconName;
}

export function PaginationButton(props: PaginationButtonProps) {
  return (
    <Button
      className="hover:bg-primary/75 hover:text-primary-foreground/70 h-8 w-8 cursor-pointer p-0"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <span className="sr-only">{props.label}</span>
      <DynamicIcon name={props.icon} className="h-3 w-3" />
    </Button>
  );
}
