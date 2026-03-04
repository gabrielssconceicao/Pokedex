export const pokemonTypes = {
  fire: {
    label: 'Fire',
    color: {
      light: 'orange-100',
      dark: 'orange-900/40',
    },
    text: {
      light: 'orange-700',
      dark: 'orange-300',
    },
  },

  water: { label: 'Water' },
  grass: { label: 'Grass' },
  electric: { label: 'Electric' },
  bug: { label: 'Bug' },
  normal: { label: 'Normal' },
  psychic: { label: 'Psychic' },
  rock: { label: 'Rock' },
  ground: { label: 'Ground' },
  ice: { label: 'Ice' },
  dragon: { label: 'Dragon' },
  dark: { label: 'Dark' },
  fairy: { label: 'Fairy' },
  fighting: { label: 'Fighting' },
  ghost: { label: 'Ghost' },
  steel: { label: 'Steel' },
  poison: { label: 'Poison' },
  flying: { label: 'Flying' },
};

type PokemonType = keyof typeof pokemonTypes;

export function getPokemonBgColor(type: PokemonType) {
  return pokemonTypes.fire.color;
}

export function getPokemonTextColor(type: PokemonType) {
  return pokemonTypes.fire.text;
}
