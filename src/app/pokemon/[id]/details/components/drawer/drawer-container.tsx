import { formatText } from '@/app/pokemon/components/format-text';
import { cn } from '@/lib/utils';

interface DrawerContainerProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  color: string;
}
export function DrawerContainer({
  title,
  color,
  description,
  children,
}: DrawerContainerProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded-md bg-white/50 py-2">
      <h4 className={cn('text-center text-xl font-semibold', color)}>
        {title}
      </h4>
      {description && (
        <div className="text-center text-gray-800">
          {formatText(description)}
        </div>
      )}
      {children}
    </div>
  );
}
