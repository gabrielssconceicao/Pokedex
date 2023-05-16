import {
  AllPokemonsProps,
  PokemonTypesColors,
} from '../../Interfaces/allPokemons';
import { Container } from './pokemonStyled';

interface PokemonProps {
  pokemon: AllPokemonsProps;
}
export function Pokemon({ pokemon }: PokemonProps) {
  return (
    <Container key={pokemon.id} to={`pokemon/${pokemon.name}`}>
      <div className="img">
        <img src={pokemon.sprites.front_default} alt={`${pokemon.name}`} />
      </div>

      <h1>{pokemon.name}</h1>

      <div style={{ display: 'flex' }}>
        {pokemon.types.map((type) => (
          <div
            key={`${pokemon.name}-${type}`}
            style={{
              background: PokemonTypesColors[type.type.name],
              flex: 1,
              textAlign: 'center',
            }}
          >
            {type.type.name}
          </div>
        ))}
      </div>
    </Container>
  );
}
