import { Route, Routes } from 'react-router';

import { AppLayout } from '@/pages/_layout/app';
import { Home } from '@/pages/app';

export function Router() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}
