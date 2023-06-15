import { Link, useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchPokemon } from '../../api';
import { PokemonsPerPage } from '../../Interfaces/allPokemons';
import Loading from '../../Components/Loading';

export function PokemonsDetails() {
  const [pokemon, setPokemon] = useState<PokemonsPerPage>();
  const { id } = useParams();
  useEffect(() => {
    const getData = async (value: string) => {
      const p = await searchPokemon(value);
      setPokemon(p);
    };

    if (id) getData(id);
  }, [id]);

  return pokemon ? (
    <section style={{ height: '100%' }}>
      <header>
        <Link to="/">Voltar</Link>
      </header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 'calc(100vh - 12px)',
        }}
      >
        <nav style={{ height: '100%' }}>
          <ul style={{ display: 'flex', flexDirection: 'column' }}>
            <li>
              <NavLink to="">Pokemon</NavLink>
            </li>
            <li>
              <NavLink to="moves">Moves</NavLink>
            </li>
          </ul>
        </nav>

        <div style={{ flex: '1' }}>
          <p>{pokemon.name}</p>
        </div>
      </div>
    </section>
  ) : (
    <Loading />
  );
}
