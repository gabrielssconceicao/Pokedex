import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="flex h-16 max-w-[inherit] items-center gap-6 border-b px-6">
      <Link href="/" className="flex items-center justify-around gap-6 px-3">
        <Image
          src={'/pokeball.svg'}
          alt="Pokeball logo"
          width={40}
          height={40}
        />
        <h1 className="text-primary font-mono text-2xl font-bold">Pokedex</h1>
      </Link>
    </header>
  );
}
