import { getPokemonColors } from '@/constants/pokemon-types';
import { cn } from '@/lib/utils';

export function Status() {
  const { text, textInverse, bg, bgInverse } = getPokemonColors('fire');
  return (
    <section className="flex flex-col gap-3 px-2 py-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="flex items-stretch" key={index}>
          <span
            className={cn(
              'flex w-12 items-center justify-center rounded-l-2xl text-center font-mono text-xs font-semibold sm:w-18',
              bg,
              text
            )}
          >
            PS
          </span>
          <div
            className={cn(
              'flex items-center justify-end rounded-r-2xl px-4',
              bgInverse,
              textInverse
            )}
            style={{
              width: '40%',
            }}
          >
            40
          </div>
        </div>
      ))}
    </section>
  );
}
