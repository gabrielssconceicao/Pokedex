export interface AllPokemonsProps {
  name: string;
  sprites: PokemonImage;
  types: PokemonTypes[];
  id: number;
}

interface PokemonImage {
  front_default: string;
}

export interface PokemonTypes {
  type: {
    name: string;
  };
}
