import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';

export function PokemonHeader() {
  return (
    <header className="border-b-foreground flex items-center border-b p-2">
      <div className="flex w-12 justify-start">
        <Link href="/">
          <span className="sr-only">Home</span>
          <ArrowLeft size={34} className="text-primary" />
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-2">
        <div className="flex items-center gap-2">
          <span className="text-accent-foreground text-lg font-semibold">
            #1
          </span>

          <h1 className="text-accent-foreground text-center text-lg font-semibold break-all">
            Pokemon Details
          </h1>
        </div>

        <div className="flex w-3/4 min-w-42 gap-2">
          <Badge className="flex-1">Fire</Badge>
          <Badge className="flex-1">Flying</Badge>
        </div>
      </div>

      <div className="flex w-12 justify-end">
        <ThemeToggle />
      </div>
    </header>
  );
}
