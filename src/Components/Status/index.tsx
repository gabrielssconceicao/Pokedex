import { PokeStats } from '../../Interfaces/allPokemons';

interface StatusProps {
  status: PokeStats[];
}
export function Status({ status }: StatusProps) {
  return (
    <div>
      <h3>Status</h3>
      {/* {status.map((stat) => (
        <div className="status" key={`${stat.stat.name}-${stat.base_stat}`}>
          <div>{stat.stat.name}</div>
          <div>{stat.base_stat}</div>
        </div>
      ))} */}
    </div>
  );
}
