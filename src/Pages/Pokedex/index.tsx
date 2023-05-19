import { InputSearch } from '../../Components/Input';
import { usePokemon } from '../../Hook/usePokemon';
import { Pokemons } from '../../Components/Pokemons';
import { Nav } from '../../Components/Nav';
import { Container } from './pokedexStyled';
import { Pagination } from '../../Components/Pagination';

export default function Pokedex() {
  const { allPokemons, isLoading } = usePokemon();

  return (
    <Container>
      <Nav />

      <Pokemons isLoading={isLoading} pokemons={allPokemons} />
      <Pagination />
    </Container>
  );
}
