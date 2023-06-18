import { NavLink } from 'react-router-dom';
import { Container } from './PokemonDetailsNav';

export default function PokemonDetailsNav() {
  return (
    <Container>
      <nav>
        <NavLink to="/">Voltar</NavLink>
      </nav>
    </Container>
  );
}
