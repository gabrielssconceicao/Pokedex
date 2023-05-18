import { Route, Routes } from 'react-router-dom';
import Pokedex from './Pages/Pokedex';
import { PokemonsDetails } from './Pages/PokemonDetails';

export function PokedexRoutes() {
  return (
    <Routes>
      <Route path="/pokemon/:id?" element={<PokemonsDetails />} />

      <Route path="/" element={<Pokedex />} />
    </Routes>
  );
}
