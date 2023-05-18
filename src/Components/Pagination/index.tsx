import { usePokemon } from '../../Hook/usePokemon';
import { Container } from './paginationStyte';

export function Pagination() {
  const { actualPage, totalPages, nextPage, prevPage, firstPage, lastPage } =
    usePokemon();
  return (
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
  );
}
