import { formatText } from '@/app/pokemon/components/format-text';
import { cn } from '@/lib/utils';

interface DrawerContainerProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  textColor: { default: string; inverse: string };
  borderColor: string;
}
export function DrawerContainer({
  title,
  textColor,
  borderColor,
  description,
  children,
}: DrawerContainerProps) {
  return (
    <div
      className={cn(
        'flex flex-1 flex-col items-center justify-center rounded-md border-2 py-2',
        borderColor
      )}
    >
      <h4
        className={cn('text-center text-xl font-semibold', textColor.default)}
      >
        {title}
      </h4>
      {description && (
        <div className={cn('text-center', textColor.inverse)}>
          {formatText(description)}
        </div>
      )}
      {children}
    </div>
  );
}
