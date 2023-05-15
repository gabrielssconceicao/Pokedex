import { usePokemon } from '../../Hook/usePokemon';

export function Pagination() {
  const { actualPage, totalPages, nextPage, prevPage, firstPage, lastPage } =
    usePokemon();
  return (
    <div>
      <button type="button" onClick={firstPage}>
        {'<<'}
      </button>
      <button type="button" onClick={prevPage}>
        {'<'}
      </button>
      <div>
        {actualPage + 1} / {totalPages}
      </div>
      <button type="button" onClick={nextPage}>
        {'>'}
      </button>
      <button type="button" onClick={lastPage}>
        {'>>'}
      </button>
    </div>
  );
}
