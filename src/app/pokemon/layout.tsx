import { PokemonHeader } from './components/PokemonHeader';
import { PokemonNavLink } from './components/PokemonNavLink';

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <PokemonHeader />
      <main className="flex h-full flex-1 flex-col">
        <section className="grow basis-0 overflow-y-auto">{children}</section>
        <PokemonNavLink />
      </main>
    </div>
  );
}
