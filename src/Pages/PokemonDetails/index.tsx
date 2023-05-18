import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchPokemon } from '../../api';
import { AllPokemonsProps } from '../../Interfaces/allPokemons';

export function PokemonsDetails() {
  const [pokemon, setPokemon] = useState<AllPokemonsProps>();
  const { id } = useParams();
  useEffect(() => {
    const getData = async (value: string) => {
      const p = await searchPokemon(value);
      setPokemon(p);
    };

    if (id) getData(id);
  }, [id]);

  return pokemon ? <h1>{pokemon.name}</h1> : <h1>Pokemon não encontrado</h1>;
}
