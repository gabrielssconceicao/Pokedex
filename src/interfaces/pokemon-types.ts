export type PokemonTypes =
  | 'normal'
  | 'fire'
  | 'fighting'
  | 'water'
  | 'flying'
  | 'grass'
  | 'poison'
  | 'electric'
  | 'ground'
  | 'psychic'
  | 'rock'
  | 'ice'
  | 'bug'
  | 'dragon'
  | 'ghost'
  | 'dark'
  | 'steel'
  | 'fairy';

const POKEMON_TYPES_COLORS: Record<
  PokemonTypes,
  { light: string; dark: string }
> = {
  normal: { light: '#A8A77A', dark: '#DAD7C0' },
  fire: { light: '#EE8130', dark: '#FFB184' },
  fighting: { light: '#C22E28', dark: '#E57373' },
  water: { light: '#6390F0', dark: '#84B6F4' },
  flying: { light: '#A98FF3', dark: '#C6B7F5' },
  grass: { light: '#7AC74C', dark: '#A8E6A3' },
  poison: { light: '#A33EA1', dark: '#C586C5' },
  electric: { light: '#F7D02C', dark: '#FFF176' },
  ground: { light: '#E2BF65', dark: '#F0D98A' },
  psychic: { light: '#F95587', dark: '#FF9BB2' },
  rock: { light: '#B6A136', dark: '#D6C873' },
  ice: { light: '#96D9D6', dark: '#B3EBE9' },
  bug: { light: '#A6B91A', dark: '#CDDC39' },
  dragon: { light: '#6F35FC', dark: '#9E7CFF' },
  ghost: { light: '#735797', dark: '#A293B3' },
  dark: { light: '#705746', dark: '#A1887F' },
  steel: { light: '#B7B7CE', dark: '#D2D2E5' },
  fairy: { light: '#D685AD', dark: '#F8BBD0' },
};

export const getPokemonTypeColor = (
  type: PokemonTypes,
  theme: 'light' | 'dark' | 'system'
) => {
  let systemTheme: 'light' | 'dark';

  if (theme === 'system') {
    systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  } else {
    systemTheme = theme;
  }

  return POKEMON_TYPES_COLORS[type][systemTheme];
};
