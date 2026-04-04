import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Props = {
  textColor: string;
  borderColor: string;
  bgColor: string;
  type: string;
  label: string;
};

export function BagdeCard({
  bgColor,
  borderColor,
  textColor,
  label,
  type,
}: Props) {
  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <Badge
        className={cn(
          'flex w-full flex-col items-center border-2',
          textColor,
          borderColor,
          bgColor
        )}
      >
        {type}
      </Badge>
      <span className={cn('font-mono text-xs font-light', textColor)}>
        {label}
      </span>
    </div>
  );
}
