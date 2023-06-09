import { Link } from 'react-router-dom';
import {
  PokemonsPerPage,
  PokemonTypesColors,
} from '../../Interfaces/allPokemons';
import { Container } from './pokemonStyled';

interface PokemonProps {
  pokemon: PokemonsPerPage;
}
export function Pokemon({ pokemon }: PokemonProps) {
  return (
    <Container key={`${pokemon.name}-${pokemon.id}`}>
      <div className="desc">
        <div className="name-id">
          <p>{pokemon.id}</p>
          <p>{pokemon.name.toUpperCase()}</p>
        </div>

        <div className="types">
          {pokemon.types.map((type, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`${pokemon.name.toLowerCase()}-${type}-${index}`}
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
          <Link to={`pokemon/${pokemon.name}/info`}>More info</Link>
        </div>
      </div>

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
    </Container>
  );
}
