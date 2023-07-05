import { useOutletContext } from 'react-router-dom';

import { Container } from './PokemonInfoStyled';
import { PokeImage } from './PokeImage';
import {
  PokemonDescription,
  PokemonsPerPage,
  PokemonTypesColors,
} from '../../Interfaces/allPokemons';
import { Description } from './Description';

export function PokemonInfo() {
  const [pokemon, specie]: [PokemonsPerPage, PokemonDescription] =
    useOutletContext();
  return (
    <Container>
      <PokeImage
        altImg={pokemon.name}
        defaultImg={pokemon.sprites.other['official-artwork'].front_default}
        alternativeImg={pokemon.sprites.front_default}
        bgColor={PokemonTypesColors[pokemon.types[0].type.name]}
      />
      <Description
        description={specie.flavor_text_entries}
        height={pokemon.height}
        weight={pokemon.weight}
      />
      <div className="abilities">Abilities</div>

      <div className="status">Status</div>
      <div className="location">Location</div>
      <div className="evolution">Evolution</div>
    </Container>
  );
}
