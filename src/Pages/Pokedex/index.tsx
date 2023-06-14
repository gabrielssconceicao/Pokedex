import { usePokemon } from '../../Hook/usePokemon';
import { Pokemons } from '../../Components/Pokemons';
import { Nav } from '../../Components/Nav';
import { Container } from './pokedexStyled';
import { Pagination } from '../../Components/Pagination';

export default function Pokedex() {
  const { pokemonsPerPage, filteredPokemons, isLoading, isSearching } =
    usePokemon();

  return (
    <Container>
      <Nav />

      <Pokemons
        isLoading={isLoading}
        pokemons={isSearching ? filteredPokemons : pokemonsPerPage}
      />
      <Pagination isSearching={isSearching} />
    </Container>
  );
}
