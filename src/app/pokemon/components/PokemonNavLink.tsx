'use client';
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
interface NavLinkProps {
  label: string;
  href: string;
  icon: IconName;
}

function NavLink({ href, icon, label }: NavLinkProps) {
  const pathname = usePathname().split('/')[3];

  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  console.log(isActive);

  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center gap-1"
      aria-label={label}
    >
      <DynamicIcon
        name={icon}
        className={cn(
          'h-5 w-5 transition-colors duration-300 sm:h-7 sm:w-7',
          isActive && 'text-primary'
        )}
      />
      <span
        className={cn('text-sm', isActive && 'text-primary font-semibold')}
        aria-label={label}
      >
        {label}
      </span>
    </Link>
  );
}

export function PokemonNavLink() {
  return (
    <nav className="border-t-foreground flex items-center justify-around border-t p-2">
      <NavLink label="Home" href="/" icon={'home'} />
      <NavLink label="Details" href="details" icon={'info'} />
      <NavLink label="Moves" href="moves" icon={'move-3d'} />
    </nav>
  );
}
