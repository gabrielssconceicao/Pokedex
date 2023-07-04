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
      {/* <div className="species">
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
          <div className="height-weight">
            <p>Height-Weight</p>
          </div>
          <div className="weight" />
          <div className="abilities">Abylites</div>
        </div>
      </div>

      <div className="status" />
      <div className="location">Location</div>
      <div className="evolution">Evolution </div> */}

      <div className="image">Image</div>
      <div className="description">Description</div>
      <div className="weight-height">Height-Weight</div>
      <div className="abilities">Abilities</div>
      <div className="status">Status</div>
      <div className="location">Location</div>
      <div className="evolution">Evolution</div>
    </Container>
  );
}
