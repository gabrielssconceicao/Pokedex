import { useEffect, useState } from 'react';
import { InputSearch } from '../Components/Input';
import { usePokemon } from '../Hook/usePokemon';
import { Pokemons } from '../Components/Pokemons';

export default function Pokedex() {
  const { allPokemons, isLoading } = usePokemon();

  return (
    <>
      <InputSearch />
      <Pokemons isLoading={isLoading} pokemons={allPokemons} />
    </>
  );
}
