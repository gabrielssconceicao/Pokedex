import { PokemonContainer } from '../../components/PokemonContainer';
import { Species } from '../components/Species';
import { Status } from '../components/Status';

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
      <PokemonContainer title="Species">
        <Species />
      </PokemonContainer>
      <PokemonContainer title="Status">
        <Status />
      </PokemonContainer>
    </section>
  );
}
