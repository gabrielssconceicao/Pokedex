import { useOutletContext } from 'react-router-dom';
import { Container } from './styled';
import { PokemonsPerPage } from '../../Interfaces/allPokemons';

export function PokemonMoves() {
  const [pokemon]: [PokemonsPerPage] = useOutletContext();
  console.log(pokemon.moves);
  return (
    <Container>
      {pokemon.moves.map((move) => (
        <p key={move.move.name}>{move.move.name}</p>
      ))}
    </Container>
  );
}
