import { cn } from '@/lib/utils';

interface AbilityContainerProps {
  title: string;
  description: string;
  color: string;
}
export function AbilityContainer({
  description,
  title,
  color,
}: AbilityContainerProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded-md bg-white/50 py-2">
      <h4 className={cn('text-xl font-semibold', color)}>{title}</h4>
      <p className="text-center text-gray-800">{description}</p>
    </div>
  );
}
