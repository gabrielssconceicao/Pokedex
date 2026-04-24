'use client';

import { type IconName } from 'lucide-react/dynamic';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { PokemonFilters, usePokemons } from '@/hooks/use-pokemons';

import { PaginationSkeleton } from '../pagination-skeleton';
import { PaginationButton } from './pagination-button';

interface PaginationProps {
  filters: PokemonFilters;
}

type ButtonActions = 'first' | 'prev' | 'next' | 'last';

const panginationButtons: Array<{
  label: string;
  icon: IconName;
  action: ButtonActions;
}> = [
  {
    label: 'First Page',
    icon: 'arrow-left-to-line',
    action: 'first',
  },
  {
    label: 'Previous Page',
    icon: 'arrow-left',
    action: 'prev',
  },
  {
    label: 'Next Page',
    icon: 'arrow-right',
    action: 'next',
  },
  {
    label: 'Last Page',
    icon: 'arrow-right-to-line',
    action: 'last',
  },
];

export function Pagination({ filters }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data, isLoading } = usePokemons(filters);

  const totalPages = data ? Math.ceil(data.count / filters.perPage) : 1;
  const currentPage = filters.page;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const isFirstPage = safePage <= 1;
  const isLastPage = safePage >= totalPages;

  function handlePageChange(action: ButtonActions) {
    const params = new URLSearchParams(searchParams.toString());
    let newPage = safePage;

    switch (action) {
      case 'first':
        newPage = 1;
        break;
      case 'prev':
        newPage = safePage - 1;
        break;
      case 'next':
        newPage = safePage + 1;
        break;
      case 'last':
        newPage = totalPages;
        break;
    }

    params.set('page', String(newPage));
    router.push(`${pathname}?${params.toString()}`);
  }

  useEffect(() => {
    if (!data) return;

    if (safePage > totalPages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', String(totalPages));
      router.replace(`${pathname}?${params.toString()}`);
    }

    if (safePage < 1) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', '1');
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [safePage, totalPages, data]);

  return data ? (
    <nav
      className="border-t-foreground flex flex-col items-center justify-between gap-3 border-t py-1 sm:flex-row"
      aria-label="Pagination"
    >
      <p className="text-muted-foreground font-mono text-sm font-semibold tracking-wider">
        <span>
          Total of <span className="text-primary">{data.count}</span> items
        </span>
      </p>

      <div className="xs:justify-around xs:px-2 flex w-full flex-1 flex-row items-center justify-between gap-2 sm:gap-6 lg:gap-8">
        <p className="text-muted-foreground flex items-center justify-center gap-1 font-mono text-sm font-semibold tracking-wider">
          <span className="max-xs:hidden">Página</span>
          <span className="text-accent-foreground">{safePage}</span>
          de
          <span className="text-primary">{totalPages}</span>
        </p>

        <div className="flex items-center justify-center gap-2">
          {panginationButtons.map(({ label, icon, action }) => {
            const disabled =
              isLoading ||
              (action === 'first' && isFirstPage) ||
              (action === 'prev' && isFirstPage) ||
              (action === 'next' && isLastPage) ||
              (action === 'last' && isLastPage);
            return (
              <PaginationButton
                key={action}
                disabled={disabled}
                onClick={() => handlePageChange(action)}
                label={label}
                icon={icon}
              />
            );
          })}
        </div>
      </div>
    </nav>
  ) : (
    <PaginationSkeleton />
  );
}
