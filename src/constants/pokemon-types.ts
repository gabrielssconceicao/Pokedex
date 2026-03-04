export const pokemonTypes = {
  fire: {
    label: 'Fire',
    colors: {
      bg: {
        light: 'bg-orange-100',
        dark: 'bg-orange-900/40',
      },
      text: {
        light: 'text-orange-400',
        dark: 'text-orange-300',
      },
      border: {
        light: 'border-orange-400',
        dark: 'border-orange-300',
      },
    },
  },
};

type PokemonType = keyof typeof pokemonTypes;

export function getPokemonColors(type: PokemonType) {
  return pokemonTypes[type].colors;
}
