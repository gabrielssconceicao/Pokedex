import { FetchPokemonMove } from '@/interface/fetch-pokemon-moves';
import { MoveResponse, PokemonMove } from '@/interface/pokemon-moves';
import { LearnMove } from '@/interface/pokemon-moves';
import { VersionName } from '@/interface/version-name';
import { fetcher } from '@/utils/fetcher';

type Props = {
  moves: FetchPokemonMove[];
  learnMethod: LearnMove;
  version: VersionName;
};

type MachineResponse = {
  item: { name: string };
};

type FetchMove = {
  move: { url: string };
  details:
    | {
        level_learned_at: number;
      }
    | undefined;
};

function filterMoves(
  moves: FetchPokemonMove[],
  learnMethod: LearnMove,
  version: VersionName
) {
  return moves
    .filter(({ version_group_details }) => {
      return version_group_details.some(
        ({ move_learn_method, version_group }) => {
          const learnMethodMatch = move_learn_method.name === learnMethod;
          const versionMath = version_group.name.includes(version);

          return learnMethodMatch && versionMath;
        }
      );
    })
    .map(({ move, version_group_details }) => {
      const details = version_group_details.find(
        ({ move_learn_method, version_group }) =>
          move_learn_method.name === learnMethod &&
          version_group.name.includes(version)
      );
      return { move, details };
    });
}

async function fetchMove(
  { move, details }: FetchMove,
  version: VersionName
): Promise<PokemonMove | null> {
  const moveResponse = await Promise.resolve(
    fetcher<MoveResponse>(move.url)
      .then((res) => res)
      .catch(() => null)
  );

  if (moveResponse === null) return null;

  const { machines, contest_type, damage_class, type, ...rest } = moveResponse;

  const machine =
    machines.find(({ version_group }) =>
      version_group.name.includes(version)
    ) || null;
  let machineName = null;

  if (machine) {
    const machineResponse = await Promise.resolve(
      fetcher<MachineResponse>(machine.machine.url)
    );
    machineName = machineResponse.item.name;
  }

  return {
    level_learned: details?.level_learned_at || null,
    machine: machineName,
    contest_type: contest_type.name,
    damage_class: damage_class.name,
    type: type.name,
    ...rest,
  };
}

export async function getPokemonMoves({ moves, version, learnMethod }: Props) {
  const filteredMoves = filterMoves(moves, learnMethod, version);

  const filteredMovePromises = filteredMoves.map(async ({ move, details }) =>
    fetchMove({ move, details }, version)
  );

  const filteredMoveResponse = (await Promise.all(filteredMovePromises)).filter(
    (res) => res !== null
  );

  console.log({ filteredMoveResponse });

  return [];
}
