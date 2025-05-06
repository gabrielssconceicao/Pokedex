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
interface PokemonCardProps {
  pokemon: GetPokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  function getPokemonImage() {
    const pokeImgs = pokemon.sprites;
    console.log({ pokeImgs });
    return (
      pokeImgs.other['official-artwork'].front_default ||
      pokeImgs.front_default ||
      pokemonEgg
    );
  }

  function captilizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Card className="min-w-3xs gap-3 p-0">
      <CardHeader className="flex h-9 flex-row justify-between border-b-2 p-0">
        <CardDescription className="bg-accent-foreground text-accent top-0 left-0 rounded-tl-md px-2 py-2 text-sm font-bold">
          #{pokemon.id}
        </CardDescription>
        <CardTitle className="mr-2 flex h-9 flex-1 items-center justify-center text-lg">
          {captilizeFirstLetter(pokemon.name)}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-center border-b-2 py-3">
        <img
          src={getPokemonImage()}
          alt={`${pokemon.name} image`}
          className="bg-accent-foreground flex h-36 flex-1 rounded-md object-contain px-4 py-2 text-white lg:w-44"
        />

        <div className="flex w-full gap-2 px-3 py-2">
          {pokemon.types.map(type => (
            <span
              key={`${pokemon.name}-${type}`}
              className="flex-1 rounded-2xl bg-pink-300 px-2 py-1 text-center font-mono text-sm font-bold text-pink-900 dark:bg-pink-900 dark:text-pink-300"
            >
              {type}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center pb-3">
        <Link
          className="border-accent-foreground text-card-foreground hover:bg-accent-foreground hover:text-card dark:hover:bg-accent-foreground dark:hover:text-card flex-1 rounded-lg border-2 px-2 py-1 text-center"
          to={`/pokemon/${pokemon.id}`}
        >
          See details
        </Link>
      </CardFooter>
    </Card>
  );
}
