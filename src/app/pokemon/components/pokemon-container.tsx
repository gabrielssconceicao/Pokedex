import React from 'react';

import { cn } from '@/lib/utils';

type PokemonCardProps = {
  title?: string;
  children: React.ReactNode;
};

export function PokemonContainer({ children, title }: PokemonCardProps) {
  return (
    <div className={cn('flex flex-col items-stretch justify-center gap-2 p-2')}>
      {title && (
        <h3 className="text-md text-center font-sans font-semibold">{title}</h3>
      )}
      <section className="rounded-lg bg-slate-100 px-2 py-1 text-gray-800 shadow-md">
        {children}
      </section>
    </div>
  );
}
