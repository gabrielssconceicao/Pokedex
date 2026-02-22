'use client';
import Image from 'next/image';

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

export function PokemonCards() {
  return (
    <section className="relative mx-auto flex-1 gap-3 py-3">
      <Card className="relative w-60">
        <CardHeader>
          <CardTitle className="flex items-center justify-center">
            Title
          </CardTitle>
          <div className="align-center absolute top-0 left-0 flex min-w-7 justify-center rounded-tl-xl rounded-br-lg bg-red-500">
            1
          </div>
        </CardHeader>
        <CardContent>
          <div>
            <div className="flex items-center justify-center rounded-lg bg-emerald-500 p-2">
              <Image
                src={pokemons[0].image}
                alt={pokemons[0].name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div></div>
          </div>
        </CardContent>
        <CardFooter>footer</CardFooter>
      </Card>
    </section>
  );
}
