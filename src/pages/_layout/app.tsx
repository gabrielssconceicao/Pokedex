import { Outlet } from 'react-router';

import { Header } from '@/components/header';

export function AppLayout() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1920px] flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
