import { useOutletContext } from 'react-router-dom';

import { Container } from './PokemonInfoStyled';
import { PokeImage } from '../PokeImage';
import {
  PokemonsPerPage,
  PokemonTypesColors,
} from '../../Interfaces/allPokemons';
import { PokemonDescription } from '../../Interfaces/pokemonDescription';
import { Description } from '../Description';
import { Abilities } from '../Abilites';
import { Status } from '../Status';

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
      <Abilities
        abilities={pokemon.abilities}
        bgColor={PokemonTypesColors[pokemon.types[0].type.name]}
      />
      <Status
        status={pokemon.stats}
        bgColor={PokemonTypesColors[pokemon.types[0].type.name]}
      />
    </Container>
  );
}
