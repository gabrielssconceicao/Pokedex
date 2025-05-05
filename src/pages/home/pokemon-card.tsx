import { Link } from 'react-router';

const pokemon = {
  name: 'Bulbasaur',
  id: 1,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  types: ['grass', 'poison'],
};
export function PokemonCard() {
  return (
    <div className="relative grid h-fit grid-cols-2 rounded-lg bg-red-300 px-3 py-2">
      <span className="absolute top-0 right-0 rounded-tr-lg bg-black px-1 py-0.5 text-white">
        #{pokemon.id}
      </span>
      <div className="w-36 rounded-md bg-white px-4 py-3 lg:w-44">
        <img
          src={pokemon.image}
          alt={`${pokemon.name} image`}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 px-5 py-2">
        <h2 className="text-center font-mono text-lg font-bold">
          {pokemon.name}
        </h2>
        <div className="flex flex-col items-center gap-2">
          {pokemon.types.map(type => (
            <span className="rounded-md bg-slate-200 px-2 py-0.5">{type}</span>
          ))}
        </div>
        <Link
          to={`/pokemon/${pokemon.id}`}
          className="mt-auto rounded-2xl border-2 border-gray-900 bg-transparent text-center text-gray-900 hover:bg-gray-900 hover:text-white"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
