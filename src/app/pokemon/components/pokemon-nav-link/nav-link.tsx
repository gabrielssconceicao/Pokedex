'use client';
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { VersionName } from '@/interface/version-name';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  label: string;
  href: string;
  icon: IconName;
  version?: VersionName;
}

export function NavLink({ href, icon, label, version }: NavLinkProps) {
  const pathname = usePathname().split('/')[3];

  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={`${href}?version=${version}`}
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
