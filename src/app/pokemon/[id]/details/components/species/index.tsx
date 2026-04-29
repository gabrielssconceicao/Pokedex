import { SpeciesCard } from './species-card';

const species = {
  description:
    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt iste voluptates doloribus ipsa vel impedit suscipit, animi quod!',
  height: '2\'4\" (0.71 m)',
  weight: '10 lbs (4.5 kg)',
  base_happiness: 50,
};

interface SpeciesProps {
  weight: number;
  height: number;
}

const formatWeight = (weight: number) =>
  `${(weight * 0.1).toFixed(1)} kg (${((weight / 10) * 2.20462).toFixed(2)} lbs)`;

const formatHeight = (height: number) =>
  `${(height / 10).toFixed(2)} m (${((height / 10) * 3.28084).toFixed(2).toString().replace('.', "'")}")`;

export function Species({ height, weight }: SpeciesProps) {
  return (
    <section className="grid grid-cols-2 gap-1 py-2">
      <SpeciesCard label="Teste" value={species.description} colSpan={2} />
      <SpeciesCard label="Height" value={formatHeight(height)} />
      <SpeciesCard label="Weight" value={formatWeight(weight)} />
    </section>
  );
}
