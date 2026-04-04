import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { PokemonContainer } from '../../components/PokemonContainer';
import { MoveTypeSelector } from './components/MoveTypeSelector';
import { PokemonTableRow } from './components/PokemonTableRow';

export default function Moves() {
  return (
    <section className="flex h-full flex-col gap-2">
      <PokemonContainer>
        <MoveTypeSelector />
      </PokemonContainer>

      <PokemonContainer>
        <div className="h-[calc(100vh-19rem)] overflow-y-auto">
          <Table>
            <TableCaption>A list of pokemon moves</TableCaption>
            <TableHeader className="bg-background">
              <TableRow>
                <TableHead className="w-6"></TableHead>
                <TableHead className="w-8 bg-amber-200 text-center text-xs">
                  Level
                </TableHead>
                <TableHead className="text-center text-xs">Name</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Array.from({ length: 10 }).map((_, index) => (
                <PokemonTableRow key={index} />
              ))}
            </TableBody>
          </Table>
        </div>
      </PokemonContainer>
    </section>
  );
}
