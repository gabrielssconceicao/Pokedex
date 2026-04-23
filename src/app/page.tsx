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
    page?: string;
    perPage?: string;
    type?: PokemonType | PokemonType[];
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { id, name, type, perPage = '25', page = '1' } = await searchParams;

  const types = Array.isArray(type) ? type : type ? [type] : [];
  const parsedPerPage = Number(perPage);
  const filterOptions = {
    id: id && !isNaN(Number(id)) ? Number(id) : undefined,
    page: page && !isNaN(Number(page)) ? Number(page) : 1,
    perPage: perPage && !isNaN(parsedPerPage) ? parsedPerPage : 25,
    name,
    types,
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex h-full flex-1 flex-col">
        <Filters />
        <PokemonList filters={filterOptions} />
      </main>
      <Pagination />
    </div>
  );
}
