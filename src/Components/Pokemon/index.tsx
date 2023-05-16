import {
  AllPokemonsProps,
  PokeTypescolors,
} from '../../Interfaces/allPokemons';

interface PokemonProps {
  pokemon: AllPokemonsProps;
}
export function Pokemon({ pokemon }: PokemonProps) {
  return (
    <div key={pokemon.id}>
      <img src={pokemon.sprites.front_default} alt={`${pokemon.name}`} />
      <h1>{pokemon.name}</h1>

      <div style={{ display: 'flex' }}>
        {pokemon.types.map((type) => (
          <div
            key={`${pokemon.name}-${type}`}
            style={{
              background: PokeTypescolors[type.type.name],
              flex: 1,
              textAlign: 'center',
            }}
          >
            {type.type.name}
          </div>
        ))}
      </div>
    </div>
  );
}
