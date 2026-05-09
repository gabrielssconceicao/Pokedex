import { cn } from '@/lib/utils';

type Props = {
  label: string;
  value: number | string | null;
  gridColumn?: 1 | 3;
  text: string;
};

const colSpanMap: Record<1 | 3, string> = {
  1: 'col-span-1',
  3: 'col-span-3',
};

export function MoveStatusCard({ label, value, text, gridColumn = 1 }: Props) {
  return (
    <div
      className={cn(
        'border-accent flex w-full flex-1 flex-col items-center justify-center rounded-2xl border-2 px-2 py-1',
        colSpanMap[gridColumn],
        text
      )}
    >
      <span className="font-mono text-xs font-semibold">{label}</span>
      {value && (
        <span className="text-center text-sm font-bold wrap-break-word whitespace-normal">
          {value}
        </span>
      )}
      {!value && (
        <span className="text-center font-bold wrap-break-word whitespace-normal">
          <span className="bg-accent inline-block h-1 w-12 rounded-lg" />
        </span>
      )}
    </div>
  );
}
