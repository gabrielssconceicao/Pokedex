'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const pokemons = [
  {
    id: 1,
    name: 'Pikachu',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    types: ['electric'],
  },

  {
    id: 4,
    name: 'Dragonite',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
    types: ['dragon', 'flying'],
  },
];

export function PokemonCard() {
  return (
    <Card className="relative w-60">
      <CardHeader className="border-b-2">
        <CardTitle className="flex items-center justify-center">
          Title
        </CardTitle>
        <div className="align-center absolute top-0 left-0 flex min-w-7 justify-center rounded-tl-xl rounded-br-lg bg-red-500">
          1
        </div>
      </CardHeader>
      <CardContent className="boder-b-2 space-y-3">
        <div className="flex items-center justify-center rounded-lg bg-emerald-500 p-2">
          <Image
            src={pokemons[0].image}
            alt={pokemons[0].name}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex flex-row gap-3">
          {pokemons[1].types.map((type) => (
            <Badge key={type} className="flex-1">
              {type}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href="pokemon/pokemon/details"
          className="hover:text-accent-foreground flex-1 rounded-lg border-2 px-2 py-1 text-center font-mono text-sm font-semibold transition-colors"
        >
          See details
        </Link>
      </CardFooter>
    </Card>
  );
}
