import React from 'react';

type CardProps = {
  label: string;
  value: string;
  colSpan?: 1 | 2;
};

const Card: React.FC<CardProps> = ({ label, value, colSpan }) => {
  const gridColSpan = colSpan ? 'col-span-2' : 'col-span-1';
  return (
    <div
      className={`${gridColSpan} flex flex-col items-center justify-center gap-0.5`}
    >
      <span className="rounded-md border-2 px-1 py-0.5 text-center text-xs text-gray-950">
        {label}
      </span>
      <div className="w-full rounded-md border border-gray-500/50 px-2 py-1 text-center text-sm text-gray-950">
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
