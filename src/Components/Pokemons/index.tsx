import { AllPokemonsProps } from '../../Interfaces/allPokemons';
import { Pokemon } from '../Pokemon';
import { Loading, PokemonContainer } from './pokemonsStyled';

interface PokemonsProps {
  isLoading: boolean;
  pokemons: AllPokemonsProps[];
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
