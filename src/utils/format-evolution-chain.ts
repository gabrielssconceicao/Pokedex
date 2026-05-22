import { getPokemon } from '@/api/get-pokemon';
import {
  Chain,
  EvolutionChainResponse,
  EvolutionDetails,
  EvolutionStep,
} from '@/interface/pokemon-evolution';

function getTrigger(details: EvolutionDetails[]): string | null {
  if (!details.length) return null;

  const last = details[details.length - 1];

  switch (last.trigger.name) {
    case 'use-item':
      return last.item?.name ?? null;

    case 'level-up':
      if (last.min_level) return `Level ${last.min_level}`;

      const move = last.known_move_type
        ? ` \n Have a ${last.known_move_type.name} move`
        : '';

      const dayTime = last.time_of_day ? ` \n at ${last.time_of_day}` : '';

      return `Happiness ${last.min_happiness}${move}${dayTime}`;

    case 'trade':
      return 'Trade';

    default:
      return null;
  }
}

async function parseChain(chain: Chain): Promise<EvolutionStep> {
  const children = await Promise.all(
    chain.evolves_to.map((child) => parseChain(child))
  );

  const pokemon = await getPokemon({ pokemon: chain.species.name });

  return {
    pokemon,
    evolve: getTrigger(chain.evolution_details),
    children,
  };
}

export async function getEvolutionChain(
  data: EvolutionChainResponse
): Promise<EvolutionStep | null> {
  if (!data?.chain) return null;

  return await parseChain(data.chain);
}
