import { cn } from '@/lib/utils';

type Props = {
  label: string;
  value: number | string;
  gridColumn?: 1 | 3;
};

const colSpanMap: Record<1 | 3, string> = {
  1: 'col-span-1',
  3: 'col-span-3',
};

export function MoveStatus({ label, value, gridColumn = 1 }: Props) {
  return (
    <div
      className={cn(
        'flex w-full flex-1 flex-col items-center justify-center rounded-2xl border-2 border-gray-500 px-2 py-1',
        colSpanMap[gridColumn]
      )}
    >
      <span className="font-mono text-xs font-semibold">{label}</span>
      <span className="text-center text-sm font-bold wrap-break-word whitespace-normal">
        {value}
      </span>
    </div>
  );
}
