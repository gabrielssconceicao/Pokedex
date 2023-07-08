import { Container, Back } from './styled';

export function PokemonNotFound() {
  return (
    <Container>
      <h1>Pokemon Not Found</h1>
      <Back to="/">Back</Back>
    </Container>
  );
}
