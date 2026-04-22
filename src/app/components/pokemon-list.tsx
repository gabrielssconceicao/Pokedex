import { PokemonCard } from '@/components/pokemon-card';
import { PokemonType } from '@/constants/pokemon-types';

const pokemons = Array.from({ length: 20 }).map((_, index) => ({
  id: index + 1,
  name: 'pikachu',
  img: '/pokemon-egg.png',
  types:
    (index + 1) % 2 === 0
      ? (['fire', 'water'] as PokemonType[])
      : (['fire'] as PokemonType[]),
}));

interface PokemonListProps {
  filterOptions: {
    id?: number;
    name?: string;
    perPage?: number;
    types: PokemonType[];
  };
}

export function PokemonList({ filterOptions }: PokemonListProps) {
  console.log(filterOptions);
  return (
    <section className="flex grow basis-0 flex-wrap items-center justify-between gap-4 overflow-y-auto px-4 py-2">
      {pokemons.map(({ id, img, name, types }) => (
        <PokemonCard key={id} id={id} name={name} img={img} types={types} />
      ))}
    </section>
  );
}
