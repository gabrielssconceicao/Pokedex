import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchPokemon } from '../../api';
import { PokemonsPerPage } from '../../Interfaces/allPokemons';
import Loading from '../../Components/Loading';
import { Container, PokemonDetailsContainer } from './pokemonDetailsStyled';
import { PokemonDetailsNav } from '../../Components/PokemonDetailsNav';
import { PokeTitle } from '../../Components/PokeTitle';

export function PokemonsDetails() {
  const [pokemon, setPokemon] = useState<PokemonsPerPage | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getData = async (value: string) => {
      setLoading(true);
      try {
        const data: PokemonsPerPage | undefined = await searchPokemon(value);
        if (data === undefined) {
          setPokemon(undefined);
          return;
        }
        setPokemon(data);
      } catch (err) {
        console.log('ERRO');
      } finally {
        setLoading(false);
      }
    };

    if (id) getData(id);
  }, [id]);
  return (
    <Container>
      {!loading ? (
        <PokemonDetailsContainer>
          {pokemon === undefined ? (
            <h1>Pokemon não encontrado</h1>
          ) : (
            <>
              <div className="container">
                <PokeTitle
                  name={pokemon.name}
                  id={pokemon.id}
                  types={pokemon.types}
                />
                <Outlet context={pokemon} />
              </div>
              <PokemonDetailsNav />
            </>
          )}
        </PokemonDetailsContainer>
      ) : (
        <Loading />
      )}
    </Container>
  );
}
