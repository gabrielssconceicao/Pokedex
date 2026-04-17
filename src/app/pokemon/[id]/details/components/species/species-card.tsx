import { cn } from '@/lib/utils';

type CardProps = {
  label: string;
  value: string;
  colSpan?: 1 | 2;
};

export function SpeciesCard({ label, value, colSpan = 1 }: CardProps) {
  const colSpanMap = { 1: 'col-span-1', 2: 'col-span-2' };
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-0.5 space-y-0.5',
        colSpanMap[colSpan]
      )}
    >
      <span className="rounded-md px-1 text-center font-mono text-xs font-semibold text-gray-950">
        {label}
      </span>
      <div className="xs:text-sm w-full rounded-md border border-gray-500/50 px-2 py-1 text-center text-xs text-gray-950">
        {value}
      </div>
    </div>
  );
}
