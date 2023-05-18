import { Link } from 'react-router-dom';
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
    <Container key={pokemon.id}>
      <div
        className="img"
        style={{ background: PokemonTypesColors[pokemon.types[0].type.name] }}
      >
        <img
          src={
            pokemon.sprites.versions['generation-v']['black-white'].animated
              .front_default
              ? pokemon.sprites.versions['generation-v']['black-white'].animated
                  .front_default
              : pokemon.sprites.front_default
          }
          alt={`${pokemon.name}`}
        />
      </div>

      <p>{pokemon.name.toUpperCase()}</p>

      <div className="types">
        {pokemon.types.map((type) => (
          <div
            key={`${pokemon.name}-${type}`}
            style={{
              background: PokemonTypesColors[type.type.name],
            }}
            className="type"
          >
            {type.type.name}
          </div>
        ))}
      </div>

      <div className="link">
        <Link to={`pokemon/${pokemon.name}`}>More info</Link>
      </div>
    </Container>
  );
}
