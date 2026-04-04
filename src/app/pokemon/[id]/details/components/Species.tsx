import React from 'react';

import { cn } from '@/lib/utils';

type CardProps = {
  label: string;
  value: string;
  colSpan?: 1 | 2;
};

const Card: React.FC<CardProps> = ({ label, value, colSpan = 1 }) => {
  const colSpanMap = { 1: 'col-span-1', 2: 'col-span-2' };
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-0.5',
        colSpanMap[colSpan]
      )}
    >
      <span className="rounded-md px-1 py-0.5 text-center font-mono text-xs font-semibold text-gray-950">
        {label}
      </span>
      <div className="xs:text-sm w-full rounded-md border border-gray-500/50 px-2 py-1 text-center text-xs text-gray-950">
        {value}
      </div>
    </div>
  );
};

const species = {
  description:
    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt iste voluptates doloribus ipsa vel impedit suscipit, animi quod!',
  height: '2\'4\" (0.71 m)',
  weight: '10 lbs (4.5 kg)',
  base_happiness: 50,
};

export function Species() {
  return (
    <section className="grid grid-cols-2 gap-1 py-2">
      <Card label="Teste" value={species.description} colSpan={2} />
      <Card label="Weight" value={species.weight} />
      <Card label="Height" value={species.height} />
    </section>
  );
}
