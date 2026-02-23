import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import Link from 'next/link';
interface NavLinkProps {
  label: string;
  href: string;
  icon: IconName;
}

function NavLink(props: NavLinkProps) {
  return (
    <Link
      href={props.href}
      className="flex flex-col items-center justify-center gap-1"
      aria-label={props.label}
    >
      <DynamicIcon name={props.icon} className="h-5 w-5 sm:h-7 sm:w-7" />
      <span className="text-sm">{props.label}</span>
    </Link>
  );
}

export function PokemonNavLink() {
  return (
    <nav className="border-t-foreground flex items-center justify-around border-t p-2">
      <NavLink label="Details" href="details" icon={'info'} />
    </nav>
  );
}
