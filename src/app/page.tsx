import { Filters } from './components/filters';
import { Header } from './components/header';
import { PokemonCards } from './components/pokemon-cards';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Filters />
        <PokemonCards />
      </main>
    </div>
  );
}
