import { NavLink } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { Container } from './PokemonDetailsNav';

export default function PokemonDetailsNav() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <BiArrowBack />
              <span>Voltar</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
