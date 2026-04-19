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
      className="h-8 w-8 p-0"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <span className="sr-only">{props.label}</span>
      <DynamicIcon name={props.icon} className="h-3 w-3" />
    </Button>
  );
}
