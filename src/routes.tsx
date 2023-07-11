import { Route, Routes } from 'react-router-dom';
import { Pokedex } from './Pages/Pokedex';
import { PokemonsDetails } from './Pages/PokemonDetails';
import { PokemonInfo } from './Components/PokemonInfo';
import { PokemonNotFound } from './Components/PokemonNotFound';
import { PokemonMoves } from './Components/PokemonMoves';

export function PokedexRoutes() {
  return (
    <Routes>
      <Route path="/pokemon/:id?" element={<PokemonsDetails />}>
        <Route path="info" element={<PokemonInfo />} />
        <Route path="moves" element={<PokemonMoves />} />
        <Route path="evolutions" element={<h1>Evolutions</h1>} />
      </Route>

      <Route path="/" element={<Pokedex />} />
      <Route path="*" element={<PokemonNotFound />} />
    </Routes>
  );
}
