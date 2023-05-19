import { InputSearch } from '../Input';
import { Container } from './navStyle';

export function Nav() {
  return (
    <Container>
      <nav>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokeApi"
        />
      </nav>
      <InputSearch />
    </Container>
  );
}
