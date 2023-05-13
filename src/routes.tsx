import { Route, Routes } from 'react-router-dom';
import Pokedex from './Pokedex';

export function PokedexRoutes() {
  return (
    <Routes>
      <Route path="/pokemon/:id?" element={<h1>Pokemon Id</h1>} />

      <Route path="/" element={<Pokedex />} />
    </Routes>
  );
}
