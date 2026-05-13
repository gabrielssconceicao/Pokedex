'use client';

import { useVersion } from '../hooks/use-version';
import { PokemonHeader } from './components/pokemon-header';
import { PokemonNavLink } from './components/pokemon-nav-link';
import { VersionSelector } from './components/version-selector';

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { handleVersionChange, version } = useVersion();
  return (
    <div className="flex h-screen flex-col p-1">
      <div className="space-y-1">
        <PokemonHeader />
        <VersionSelector onVersionChange={handleVersionChange} />
      </div>
      <main className="flex h-full flex-1 flex-col">
        <section className="grow basis-0 overflow-y-auto">{children}</section>
        <PokemonNavLink version={version} />
      </main>
    </div>
  );
}
