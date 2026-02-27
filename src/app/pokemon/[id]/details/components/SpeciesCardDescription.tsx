import { CardDescription } from '@/components/ui/card';

interface Props {
  label: string;
  value: string;
  colSpan?: 1 | 2;
}
export function SpeciesCardDespription({ label, value, colSpan = 1 }: Props) {
  return (
    <div
      className={`col-span-${colSpan} flex flex-col items-center justify-center`}
    >
      <CardDescription className="border-accent-foreground/50 text-accent-foreground/80 w-full rounded-md border px-2 py-1 text-center text-xs sm:text-sm">
        {value}
      </CardDescription>
      <span className="text-accent-foreground/45 text-xs">{label}</span>
    </div>
  );
}
