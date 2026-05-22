'use client';

import { VersionName } from '@/interface/version-name';
import { getReturnUrl } from '@/lib/navigation';

import { NavLink } from './nav-link';

type PokemonNavLinkProps = {
  version: VersionName;
};

export function PokemonNavLink({ version }: PokemonNavLinkProps) {
  const returnUrl = getReturnUrl();
  return (
    <nav className="border-t-foreground flex items-center justify-around border-t p-2">
      <NavLink label="Home" href={returnUrl || '/'} icon={'home'} />
      <NavLink label="Details" href="details" icon={'info'} version={version} />
      <NavLink label="Moves" href="moves" icon={'swords'} version={version} />
      <NavLink label="Weakness" href="weakness" icon={'shield-alert'} />
    </nav>
  );
}
