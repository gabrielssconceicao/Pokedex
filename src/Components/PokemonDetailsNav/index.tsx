import { NavLink, Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineInfoCircle, AiOutlineArrowUp } from 'react-icons/ai';
import { MdOutlineGamepad } from 'react-icons/md';
import { Container } from './PokemonDetailsNav';

export function PokemonDetailsNav() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <BiArrowBack />
              <span>Back</span>
            </Link>
          </li>
          <li>
            <NavLink to="info">
              <AiOutlineInfoCircle />
              <span>Info</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="moves">
              <MdOutlineGamepad />
              <span>Moves</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="evolutions">
              <AiOutlineArrowUp />
              <span>Evolutions</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
