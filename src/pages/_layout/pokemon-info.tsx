import { ArrowFatLeft, GameController, Info } from '@phosphor-icons/react';
import { ArrowCircleUp } from '@phosphor-icons/react/dist/ssr';
import { Link, Outlet } from 'react-router';

import { Header } from '@/components/header';
import { NavLinkCustom } from '@/components/nav-link';

export function PokemonInfoLayout() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1920px] flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4">
        <Outlet />
      </div>
      <footer className="flex min-h-16 max-w-[inherit] items-center justify-around gap-2 px-2">
        {/* Create a Custon NavLink */}
        <Link to={'/'} className="flex flex-1 items-center justify-center">
          <ArrowFatLeft className="h-12 w-12" />
          <span className="sr-only">Go back</span>
        </Link>
        <NavLinkCustom to="info">
          <Info className="h-10 w-10" />
          <span>Info</span>
        </NavLinkCustom>
        <NavLinkCustom to="moves">
          <GameController className="h-10 w-10" />
          <span>Moves</span>
        </NavLinkCustom>
        <NavLinkCustom to="evolution">
          <ArrowCircleUp className="h-10 w-10" />
          <span>Evolution</span>
        </NavLinkCustom>
      </footer>
    </div>
  );
}
