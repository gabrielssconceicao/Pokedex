import { Route, Routes } from 'react-router';

import { AppLayout } from '@/pages/_layout/app';
import { PokemonInfoLayout } from '@/pages/_layout/pokemon-info';
import { Home } from '@/pages/app/home';
import { PokemonInfo } from '@/pages/app/pokemon/pokemon-info';

export function Router() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index path="/" element={<Home />} />
      </Route>
      <Route path="/pokemon/:name" element={<PokemonInfoLayout />}>
        <Route index path="info" element={<PokemonInfo />} />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}
