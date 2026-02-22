import { Filters } from './components/filters';
import { Header } from './components/header';
import { PokemonCard } from './components/pokemon-card';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex h-full flex-1 flex-col">
        <Filters />
        <section className="flex grow basis-0 flex-wrap items-center justify-around gap-4 overflow-y-auto px-4 py-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <PokemonCard key={index} />
          ))}
        </section>
        <h3>2</h3>
      </main>
    </div>
  );
}
