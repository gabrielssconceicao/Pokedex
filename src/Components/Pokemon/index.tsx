import { AllPokemonsProps } from '../../Interfaces/allPokemons';

interface PokemonProps {
  pokemon: AllPokemonsProps;
}
export function Pokemon({ pokemon }: PokemonProps) {
  return (
    <div key={pokemon.id}>
      <img src={pokemon.sprites.front_default} alt={`${pokemon.name}`} />
      <h1>{pokemon.name}</h1>

      <div>
        {pokemon.types.map((type) => (
          <div key={`${pokemon.name}-${type}`}>{type.type.name}</div>
        ))}
      </div>
    </div>
  );
}
