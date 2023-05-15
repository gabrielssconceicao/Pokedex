import { AllPokemonsProps } from '../../Interfaces/allPokemons';

interface PokemonContainerProps {
  pokemon: AllPokemonsProps;
}
export default function PokemonContainer({ pokemon }: PokemonContainerProps) {
  return (
    <div key={pokemon.id}>
      <img src={pokemon.sprites.front_default} alt={`${pokemon.name}`} />
      <p>{pokemon.name}</p>
    </div>
  );
}
