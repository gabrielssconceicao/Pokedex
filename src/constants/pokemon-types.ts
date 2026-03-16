export const pokemonTypes = {
  fire: {
    label: 'Fire',
    colors: {
      bg: 'bg-red-300 dark:bg-pink-900',
      reverseBg: 'bg-pink-900 dark:bg-red-300',
      img: 'bg-pink-900 dark:bg-red-300',
      text: 'text-orange-600 dark:text-orange-300',
      textReverse: 'dark:text-orange-600 text-orange-300',
      border: 'border-orange-500 dark:border-orange-300',
    },
  },
};

export enum PokemonTypesColors {
  normal = '#A8A77A',
  fire = '#EE8130',
  water = '#6390F0',
  electric = '#F7D02C',
  grass = '#7AC74C',
  ice = '#96D9D6',
  fighting = '#C22E28',
  poison = '#A33EA1',
  ground = '#E2BF65',
  flying = '#A98FF3',
  psychic = '#F95587',
  bug = '#A6B91A',
  rock = '#B6A136',
  ghost = '#735797',
  dragon = '#6F35FC',
  dark = '#705746',
  steel = '#B7B7CE',
  fairy = '#D685AD',
}

export type PokemonType = keyof typeof pokemonTypes;

export function getPokemonColors(type: PokemonType) {
  return pokemonTypes[type].colors;
}
