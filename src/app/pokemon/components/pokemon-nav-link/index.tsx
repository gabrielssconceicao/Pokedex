'use client';

import { getReturnUrl } from '@/lib/navigation';

import { NavLink } from './nav-link';

export function PokemonNavLink() {
  const returnUrl = getReturnUrl();
  return (
    <nav className="border-t-foreground flex items-center justify-around border-t p-2">
      <NavLink label="Home" href={returnUrl || '/'} icon={'home'} />
      <NavLink label="Details" href="details" icon={'info'} />
      <NavLink label="Moves" href="moves" icon={'swords'} />
      <NavLink label="Weakness" href="weakness" icon={'shield-alert'} />
    </nav>
  );
}
