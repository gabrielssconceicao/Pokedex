import { useOutletContext } from 'react-router-dom';

import { Container } from './PokemonInfoStyled';
import { PokeImage } from './PokeImage';
import { PokemonsPerPage } from '../../Interfaces/allPokemons';

export function PokemonInfo() {
  const [pokemon, specie]: [PokemonsPerPage, unknown] = useOutletContext();
  console.log(pokemon);
  console.log(specie);
  return (
    <Container>
      <PokeImage
        className="image"
        altImg={pokemon.name}
        defaultImg={pokemon.sprites.other['official-artwork'].front_default}
        alternativeImg={pokemon.sprites.front_default}
      />
      <div className="description">Description</div>
      <div className="abilities">Abilities</div>

      <div className="status">Status</div>
      <div className="location">Location</div>
      <div className="evolution">Evolution</div>
    </Container>
  );
}
