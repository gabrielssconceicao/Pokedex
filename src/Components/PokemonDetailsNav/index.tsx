import { NavLink, Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { Container } from './PokemonDetailsNav';

export default function PokemonDetailsNav() {
  return (
    <Container>
      <nav>
        <NavLink to="/">
          <BiArrowBack />
          <span>Voltar</span>
        </NavLink>
      </nav>
    </Container>
  );
}
