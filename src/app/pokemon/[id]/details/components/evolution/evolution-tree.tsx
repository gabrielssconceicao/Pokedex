import { ArrowDown, ArrowRight } from 'lucide-react';

import { PokemonCard } from '@/components/pokemon-card';
import { EvolutionStep } from '@/interface/pokemon-evolution';

type Props = {
  node: EvolutionStep;
};

export function EvolutionTree({ node }: Props) {
  const hasMultipleChildren = node.children.length > 1;
  return (
    <>
      {node.evolve && (
        <div className="flex w-24 flex-col items-center justify-center">
          <ArrowRight className="hidden sm:block" />
          <ArrowDown className="block sm:hidden" />
          <p className="text-center">
            {node.evolve.split('\n').map((line, index) => (
              <span key={index} className="text-xs">
                {line} <br />
              </span>
            ))}
          </p>
        </div>
      )}
      <PokemonCard pokemon={node.pokemon} variant="default" />
      {node.children.length > 0 && hasMultipleChildren && (
        <div className="flex flex-row flex-wrap justify-center gap-1 space-y-3 px-2 py-1 max-sm:w-full sm:flex-col">
          {node.children.map((child) => (
            <div
              className="flex flex-1 flex-col items-center justify-between gap-2 sm:flex-row"
              key={child.pokemon.id}
            >
              <EvolutionTree node={child} />
            </div>
          ))}
        </div>
      )}
      {node.children.length > 0 && !hasMultipleChildren && (
        <EvolutionTree node={node.children[0]} />
      )}
    </>
  );
}
