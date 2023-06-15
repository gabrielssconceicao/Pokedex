import { useEffect, useState } from 'react';
import { usePokemon } from '../../Hook/usePokemon';
import { Container } from './paginationStyle';

interface PaginationProps {
  isSearching: boolean;
}
export function Pagination({ isSearching }: PaginationProps) {
  const {
    actualPage,
    actualSearchPage,
    totalPages,
    setActualPage,
    setActualSearchPage,
  } = usePokemon();

  const [page, setPage] = useState(0);
  const [totPages, setTotPages] = useState(0);

  useEffect(() => {
    if (isSearching) {
      setPage(actualSearchPage);
    } else {
      setPage(actualPage);
    }
    setTotPages(totalPages);
  }, [isSearching, actualPage, actualSearchPage, totalPages]);

  const nextPage = (search: boolean): void => {
    if (page + 1 >= totPages) return;
    if (search) {
      setActualSearchPage((prev) => prev + 1);
      return;
    }
    setActualPage((prev) => prev + 1);
  };

  const lastPage = (search: boolean): void =>
    search ? setActualSearchPage(totPages - 1) : setActualPage(totPages - 1);

  const prevPage = (search: boolean): void => {
    if (page < 1) return;
    if (search) {
      setActualSearchPage((prev) => prev - 1);
      return;
    }
    setActualPage((prev) => prev - 1);
  };

  const firstPage = (search: boolean): void =>
    search ? setActualSearchPage(0) : setActualPage(0);

  return (
    <Container>
      <button type="button" onClick={() => firstPage(isSearching)}>
        {'<<'}
      </button>
      <button type="button" onClick={() => prevPage(isSearching)}>
        {'<'}
      </button>
      <div className="page_index">
        {page + 1} / {totalPages}
      </div>
      <button type="button" onClick={() => nextPage(isSearching)}>
        {'>'}
      </button>
      <button type="button" onClick={() => lastPage(isSearching)}>
        {'>>'}
      </button>
    </Container>
  );
}
