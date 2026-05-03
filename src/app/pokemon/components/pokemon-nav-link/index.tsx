'use client';
import { useRouter } from 'next/navigation';

import { NavLink } from './nav-link';

export function PokemonNavLink() {
  const router = useRouter();
  return (
    <nav className="border-t-foreground flex items-center justify-around border-t p-2">
      <NavLink label="Home" href="/" icon={'home'} />
      <NavLink label="Details" href="details" icon={'info'} />
      <NavLink label="Moves" href="moves" icon={'swords'} />
      <NavLink label="Weakness" href="weakness" icon={'shield-alert'} />
    </nav>
  );
}
