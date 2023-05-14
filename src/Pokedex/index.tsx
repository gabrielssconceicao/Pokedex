import { InputSearch } from '../Components/Input';
import { usePokemon } from '../Hook/usePokemon';
import { Pokemons } from '../Components/Pokemons';
import { Nav } from '../Components/Nav';

export default function Pokedex() {
  const { allPokemons, isLoading } = usePokemon();

  return (
    <>
      <Nav />
      <InputSearch />
      <Pokemons isLoading={isLoading} pokemons={allPokemons} />
      <p>Pagination</p>
    </>
  );
}
