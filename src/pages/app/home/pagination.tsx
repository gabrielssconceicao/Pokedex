import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';

interface PaginationProps {
  pageIndex: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageIndex: number) => void;
}

export function Pagination({
  pageIndex,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return (
    <footer className="flex items-center justify-between px-5 py-2">
      <span className="text-muted-foreground font-mono text-sm">
        Total de {totalItems} items
      </span>
      {/*Items per page? */}
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-muted-foreground text-md font-mono">
          Página {pageIndex + 1} de {totalPages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="h-8 w-8 p-0"
            disabled={pageIndex === 0}
            onClick={() => onPageChange(0)}
          >
            <span className="sr-only">Primeira Página</span>
            <CaretDoubleLeft className="h-3 w-3" />
          </Button>
          <Button
            className="h-8 w-8 p-0"
            disabled={pageIndex === 0}
            onClick={() => onPageChange(pageIndex - 1)}
          >
            <span className="sr-only">Página anterior</span>
            <CaretLeft className="h-3 w-3" />
          </Button>
          <Button
            className="h-8 w-8 p-0"
            disabled={pageIndex === totalPages - 1}
            onClick={() => onPageChange(pageIndex + 1)}
          >
            <span className="sr-only">Próxima Página</span>
            <CaretRight className="h-3 w-3" />
          </Button>
          <Button
            className="h-8 w-8 p-0"
            disabled={pageIndex === totalPages - 1}
            onClick={() => onPageChange(totalPages - 1)}
          >
            <span className="sr-only">Última Página</span>
            <CaretDoubleRight className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
