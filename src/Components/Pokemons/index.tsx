import { AllPokemonsProps } from '../../Interfaces/allPokemons';
import PokemonContainer from '../PokemonContainer';
import { Container } from './pokemonsStyled';

interface PokemonsProps {
  isLoading: boolean;
  pokemons: AllPokemonsProps[];
}
export function Pokemons({ isLoading, pokemons }: PokemonsProps) {
  return (
    <Container>
      <h1>Pokemon</h1>

      {isLoading ? (
        <p>Carregando</p>
      ) : (
        pokemons.map((pokemon) => (
          <PokemonContainer key={pokemon.id} pokemon={pokemon} />
        ))
      )}
    </Container>
  );
}
