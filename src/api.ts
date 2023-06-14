export const searchPokemon = async (pokemon: string) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('Error');
  }
};
export const getPokemonData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return await data;
  } catch (error) {
    throw new Error('A');
  }
};

export const getPokemons = async (limit = 25, offset = 0) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('Error');
  }
};
