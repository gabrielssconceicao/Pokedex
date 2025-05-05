import { Link } from 'react-router';

import logo from '@/assets/pokeball.svg';
import { ThemeToggle } from '@/styles/theme-toggle';
export function Header() {
  return (
    <header className="flex h-16 max-w-[inherit] items-center gap-6 border-b px-6">
      <Link to={'/'} className="flex items-center justify-around gap-6 px-3">
        <img src={logo} alt="Pokedex logo" className="h-10 w-10" />
        <h1 className="font-mono text-2xl font-bold text-red-500 dark:text-red-400">
          Pokedex
        </h1>
      </Link>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  );
}
