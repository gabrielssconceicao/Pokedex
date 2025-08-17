import Image from 'next/image';
import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle';

import { FormInput } from './components/form-inputs';

export default function Home() {
  return (
    <>
      <header className="flex h-16 max-w-[inherit] items-center gap-6 border-b px-6">
        <Link href="/" className="flex items-center justify-around gap-6 px-3">
          <Image
            src={'/pokeball.svg'}
            alt="Pokeball logo"
            width={40}
            height={40}
          />
          <h1 className="font-mono text-2xl font-bold text-red-500 dark:text-red-400">
            Pokedex
          </h1>
        </Link>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </header>
      <main>
        <FormInput />
        <section>Data</section>
        <section>Pagination</section>
      </main>
    </>
  );
}
