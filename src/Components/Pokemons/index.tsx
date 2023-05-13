import { AllPokemonsProps } from '../../Interfaces/allPokemons';

interface PokemonsProps {
  isLoading: boolean;
  pokemons: AllPokemonsProps[];
}
export function Pokemons({ isLoading, pokemons }: PokemonsProps) {
  return (
    <>
      <h1>Pokemon</h1>
      {isLoading ? (
        <p>Carregando</p>
      ) : (
        pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <p>
              {pokemon.name} - <span>{pokemon.id}</span>
            </p>
          </div>
        ))
      )}
    </>
  );
}
