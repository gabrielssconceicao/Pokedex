import { usePokemon } from '../../Hook/usePokemon';
import { Container } from './paginationStyte';

export function Pagination() {
  const { actualPage, totalPages, isSearching, setActualPage } = usePokemon();

  const nextPage = (): void => {
    if (actualPage > totalPages) return;
    setActualPage((prev) => prev + 1);
  };

  const lastPage = (): void => setActualPage(totalPages - 1);

  const prevPage = (): void => {
    if (actualPage < 1) return;
    setActualPage((prev) => prev - 1);
  };

  const firstPage = (): void => setActualPage(0);
  return (
    !isSearching && (
      <Container>
        <button type="button" onClick={firstPage}>
          {'<<'}
        </button>
        <button type="button" onClick={prevPage}>
          {'<'}
        </button>
        <div className="page_index">
          {actualPage + 1} / {totalPages}
        </div>
        <button type="button" onClick={nextPage}>
          {'>'}
        </button>
        <button type="button" onClick={lastPage}>
          {'>>'}
        </button>
      </Container>
    )
  );
}
