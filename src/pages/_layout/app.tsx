import { Outlet } from 'react-router';

import { Header } from '@/components/header';

export function AppLayout() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
