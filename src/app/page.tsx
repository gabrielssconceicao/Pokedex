'use server';

import { PokemonType } from '@/constants/pokemon-types';

import { Filters } from './components/filters';
import { Header } from './components/header';
import { Pagination } from './components/pagination';
import { PokemonList } from './components/pokemon-list';
import { parsePokemonSearchParams } from './utils/parse-pokemon-search-params';
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

  const filterOptions = parsePokemonSearchParams({
    id,
    name,
    type,
    page,
    perPage,
  });
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
