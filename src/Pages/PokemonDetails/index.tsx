import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchPokemon } from '../../api';
import { PokemonsPerPage } from '../../Interfaces/allPokemons';
import { PokemonDescription } from '../../Interfaces/pokemonDescription';
import Loading from '../../Components/Loading';
import { Container, PokemonDetailsContainer } from './pokemonDetailsStyled';
import { PokemonDetailsNav } from '../../Components/PokemonDetailsNav';
import { PokeTitle } from '../../Components/PokeTitle';
import { PokemonNotFound } from '../../Components/PokemonNotFound';

export function PokemonsDetails() {
  const [pokemon, setPokemon] = useState<PokemonsPerPage | undefined>(
    undefined
  );
  const [specie, setSpecie] = useState<PokemonDescription | undefined>();
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
        setPokemon(undefined);
      } finally {
        setLoading(false);
      }
    };

    if (id) getData(id);
  }, [id]);

  useEffect(() => {
    const getData = async (url: string) => {
      const response = await fetch(url);
      return response.json();
    };
    if (pokemon) {
      const { species } = pokemon;

      try {
        setLoading(true);
        const response = getData(species.url);
        Promise.allSettled([response]).then((data) =>
          data[0].status === 'fulfilled'
            ? setSpecie(data[0].value)
            : setSpecie(undefined)
        );
      } catch (error) {
        setSpecie(undefined);
      } finally {
        setLoading(false);
      }
    }
  }, [pokemon]);
  return (
    <Container>
      {!loading ? (
        <PokemonDetailsContainer>
          {pokemon === undefined ? (
            <PokemonNotFound />
          ) : (
            <>
              <div className="container">
                <PokeTitle
                  name={pokemon.name}
                  id={pokemon.id}
                  types={pokemon.types}
                />
                {specie && <Outlet context={[pokemon, specie]} />}
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
