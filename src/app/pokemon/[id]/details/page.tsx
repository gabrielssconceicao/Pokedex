import { PokemonContainer } from '../../components/PokemonContainer';

const species = {
  description:
    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt iste voluptates doloribus ipsa vel impedit suscipit, animi quod!',
  height: '2\'4\" (0.71 m)',
  weight: '10 lbs (4.5 kg)',
};

const habilities = [
  {
    name: 'Hability 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt iste voluptates doloribus ipsa vel impedit suscipit, animi quod!',
  },
];

export default function Details() {
  return (
    <section>
      <PokemonContainer title="123">
        <h2>Details</h2>
      </PokemonContainer>
    </section>
  );
}
