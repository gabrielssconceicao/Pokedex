import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchPokemon } from '../../api';
import { PokemonsPerPage } from '../../Interfaces/allPokemons';
import Loading from '../../Components/Loading';
import { Container, PokemonDetailsContainer } from './pokemonDetailsStyled';
import PokemonDetailsNav from '../../Components/PokemonDetailsNav';

export function PokemonsDetails() {
  const [pokemon, setPokemon] = useState<PokemonsPerPage>();
  const { id } = useParams();
  useEffect(() => {
    const getData = async (value: string) => {
      let data = {};

      try {
        const p: PokemonsPerPage = await searchPokemon(value);
        data = { ...p };
      } catch (err) {
        setPokemon(data);
      } finally {
        if (Object.entries(data).length > 0) {
          setPokemon(data);
        } else {
          setPokemon({ name: 'pokemon not found' });
        }
      }
    };

    if (id) getData(id);
  }, [id]);

  return (
    <Container>
      {pokemon ? (
        <PokemonDetailsContainer>
          <PokemonDetailsNav />

          {Object.entries(pokemon).length === 1 ? (
            <h1>{pokemon.name}</h1>
          ) : (
            <div style={{ flex: 1 }}>
              <h1>{pokemon.name}</h1>
              <img
                src={
                  pokemon.sprites.other['official-artwork']
                    ? pokemon.sprites.other['official-artwork'].front_default
                    : pokemon.sprites.front_default
                }
                alt={pokemon.name}
                style={{ height: '50rem' }}
              />
            </div>
          )}
        </PokemonDetailsContainer>
      ) : (
        <Loading />
      )}
    </Container>
  );
}
