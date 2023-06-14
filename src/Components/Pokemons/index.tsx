import { PokemonsPerPage } from '../../Interfaces/allPokemons';
import Loading from '../Loading';
import { Pokemon } from '../Pokemon';
import { PokemonContainer } from './pokemonsStyled';

interface PokemonsProps {
  isLoading: boolean;
  pokemons: PokemonsPerPage[];
}
export function Pokemons({ isLoading, pokemons }: PokemonsProps) {
  return (
    <PokemonContainer>
      {isLoading ? (
        <Loading />
      ) : (
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))
      )}
    </PokemonContainer>
  );
}
