import { Link } from 'react-router';

import { GetPokemon } from '@/api/get-pokemons';
import pokemonEgg from '@/assets/pokemon-egg.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getPokemonTypeColor, PokemonTypes } from '@/interfaces/pokemon-types';
import { useTheme } from '@/styles/theme-provider';
interface PokemonCardProps {
  pokemon: GetPokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  function getPokemonImage(): string {
    const pokeImgs = pokemon.sprites;
    return (
      pokeImgs.other['official-artwork'].front_default ||
      pokeImgs.front_default ||
      pokemonEgg
    );
  }

  function captilizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const { theme }: { theme: 'light' | 'dark' | 'system' } = useTheme();

  const setPokemonTypeColor = (type: PokemonTypes) =>
    getPokemonTypeColor(type, theme);

  return (
    <Card
      className="h-[400px] min-w-72 gap-3 p-0"
      style={{
        borderColor: setPokemonTypeColor(pokemon.types[0]),
        boxShadow: `1px 1px 3px 1px ${setPokemonTypeColor(pokemon.types[0])}B3`,
      }}
    >
      <CardHeader
        className="flex h-9 flex-row justify-between border-b-1 p-0"
        style={{
          borderBottomColor: setPokemonTypeColor(pokemon.types[0]),
        }}
      >
        <CardDescription
          className="text-accent top-0 left-0 rounded-tl-md px-2 py-2 text-sm font-bold"
          style={{
            backgroundColor: setPokemonTypeColor(pokemon.types[0]),
          }}
        >
          Nº {pokemon.id.toFixed().padStart(4, '0')}
        </CardDescription>
        <CardTitle className="text-clamp mr-2 flex min-h-9 flex-1 items-center justify-center">
          {captilizeFirstLetter(pokemon.name)}
        </CardTitle>
      </CardHeader>
      <CardContent
        className="flex flex-1 flex-col items-center border-b-1 py-3"
        style={{
          borderBottomColor: setPokemonTypeColor(pokemon.types[0]),
        }}
      >
        <img
          src={getPokemonImage()}
          alt={`${pokemon.name} image`}
          className="flex h-36 min-h-36 flex-1 rounded-md object-contain px-4 py-2 text-white lg:w-44"
          style={{
            background:
              pokemon.types.length > 1
                ? `linear-gradient(to bottom right, ${setPokemonTypeColor(pokemon.types[0])}, ${setPokemonTypeColor(pokemon.types[1])})`
                : setPokemonTypeColor(pokemon.types[0]),
          }}
        />

        <div className="flex w-full gap-2 px-3 py-2">
          {pokemon.types.map(type => (
            <span
              key={`${pokemon.name}-${type}`}
              style={{
                background: setPokemonTypeColor(type),
              }}
              className="text-accent flex-1 rounded-2xl px-2 py-1 text-center font-mono text-sm font-bold"
            >
              {type}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center pb-3">
        <Link
          className="pokemon-link flex-1 rounded-lg border-2 px-2 py-1 text-center"
          to={`/pokemon/${pokemon.id}`}
          style={
            {
              '--type-color': setPokemonTypeColor(pokemon.types[0]),
            } as React.CSSProperties
          }
        >
          See details
        </Link>
      </CardFooter>
    </Card>
  );
}
