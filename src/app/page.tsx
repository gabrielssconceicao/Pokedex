import { PokemonCard } from '@/components/pokemon-card';
import { PokemonType } from '@/constants/pokemon-types';

import { Filters } from './components/filters';
import { Header } from './components/header';
import { Pagination } from './components/pagination';

const pokemons = Array.from({ length: 20 }).map((_, index) => ({
  id: index + 1,
  name: 'pikachu',
  img: '/pokemon-egg.png',
  types:
    (index + 1) % 2 === 0
      ? (['fire', 'water'] as PokemonType[])
      : (['fire'] as PokemonType[]),
}));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex h-full flex-1 flex-col">
        <Filters />
        <section className="flex grow basis-0 flex-wrap items-center justify-between gap-4 overflow-y-auto px-4 py-2">
          {pokemons.map(({ id, img, name, types }) => (
            <PokemonCard key={id} id={id} name={name} img={img} types={types} />
          ))}
        </section>
      </main>
      <Pagination />
    </div>
  );
}
