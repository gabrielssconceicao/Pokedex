import { useOutletContext } from 'react-router-dom';
import { PokemonsPerPage } from '../../Interfaces/allPokemons';
import { Container } from './PokemonInfoStyled';

export function PokemonInfo() {
  const pokemon: PokemonsPerPage = useOutletContext();
  return (
    <Container>
      <div className="title">
        {pokemon.id} - {pokemon.name}
      </div>
      <div className="image">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
    </Container>
  );
}
