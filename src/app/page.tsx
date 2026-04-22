'use server';

import { PokemonType } from '@/constants/pokemon-types';

import { Filters } from './components/filters';
import { Header } from './components/header';
import { Pagination } from './components/pagination';
import { PokemonList } from './components/pokemon-list';

type HomeProps = {
  searchParams: Promise<{
    id?: string;
    name?: string;
    perPage?: string;
    type?: PokemonType | PokemonType[];
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { id, name, perPage = '25', type } = await searchParams;

  const types = Array.isArray(type) ? type : type ? [type] : [];
  const parsedPerPage = Number(perPage);
  const filterOptions = {
    id: id && !isNaN(Number(id)) ? Number(id) : undefined,
    name,
    perPage: perPage && !isNaN(parsedPerPage) ? parsedPerPage : 25,
    types,
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex h-full flex-1 flex-col">
        <Filters />
        <PokemonList filterOptions={filterOptions} />
      </main>
      <Pagination />
    </div>
  );
}
