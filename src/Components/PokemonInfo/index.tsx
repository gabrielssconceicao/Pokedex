import { useOutletContext } from 'react-router-dom';
import {
  PokemonTypesColors,
  PokemonsPerPage,
} from '../../Interfaces/allPokemons';
import { Container } from './PokemonInfoStyled';

export function PokemonInfo() {
  const pokemon: PokemonsPerPage = useOutletContext();
  console.log(pokemon);
  return (
    <Container>
      <div className="title">
        <span> Nº{pokemon.id}</span>
        <span>{pokemon.name}</span>
        <div className="types">
          {pokemon.types.map((type) => (
            <div
              key={type.type.name}
              className="type"
              style={{ background: PokemonTypesColors[type.type.name] }}
            >
              {type.type.name}
            </div>
          ))}
        </div>
      </div>

      <div className="species">
        <div className="image">
          <img
            src={
              pokemon.sprites.other['official-artwork'].front_default
                ? pokemon.sprites.other['official-artwork'].front_default
                : pokemon.sprites.front_default
            }
            alt=""
          />
        </div>

        <div className="specie">
          <div className="description">description</div>
          <div className="height">Heigh: {pokemon.height / 10}m</div>
          <div className="weight">Weight: {pokemon.weight / 10}Kg</div>
          <div className="abilities">Abylites</div>
        </div>
      </div>

      <div className="status" />
      <div className="location">Location</div>
      <div className="evolution">Evolution </div>
    </Container>
  );
}
