import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';

export function PokemonHeader() {
  return (
    <header className="border-b-foreground flex flex-row items-center justify-between border-b p-1">
      <Link
        href={'/'}
        className="hover:border-primary hover:rounded-lg hover:border"
        aria-label="Return home"
      >
        <span className="sr-only">Home</span>
        <ArrowLeft size={34} className="text-primary" />
      </Link>
      <div className="flex flex-1 flex-col items-center justify-around gap-1 px-2 sm:flex-row sm:gap-3">
        <div className="flex w-full items-center justify-around gap-2">
          <span className="text-accent-foreground text-lg font-semibold">
            #1
          </span>
          <h1 className="text-accent-foreground justify-center text-lg font-semibold break-all">
            Pokemon Details
          </h1>
        </div>

        <div className="flex w-full justify-around gap-2 p-0.5 sm:w-32">
          <Badge className="flex-1">Fire</Badge>
          <Badge className="flex-1">Fire</Badge>
        </div>
      </div>
      <ThemeToggle />
    </header>
  );
}
