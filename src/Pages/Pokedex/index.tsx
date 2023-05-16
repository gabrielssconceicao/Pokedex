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
      <InputSearch />
      <Pokemons isLoading={isLoading} pokemons={allPokemons} />
      <Pagination />
    </Container>
  );
}
