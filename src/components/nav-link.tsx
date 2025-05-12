import { NavLink, NavLinkProps, useLocation } from 'react-router';

export function NavLinkCustom(props: NavLinkProps) {
  const { pathname } = useLocation();
  const route = pathname.split('/').pop();
  console.log(route);
  return (
    <NavLink
      data-current={route === props.to}
      className="text-clamp flex flex-1 flex-col items-center justify-center data-[current=true]:text-red-500 dark:data-[current=true]:text-red-400"
      {...props}
    />
  );
}
