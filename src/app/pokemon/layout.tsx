import { PokemonHeader } from './components/PokemonHeader';

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PokemonHeader />
      {children}
    </div>
  );
}
