import { SpeciesCard } from './species-card';

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
      <SpeciesCard label="Teste" value={species.description} colSpan={2} />
      <SpeciesCard label="Weight" value={species.weight} />
      <SpeciesCard label="Height" value={species.height} />
    </section>
  );
}
