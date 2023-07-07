import { useMemo } from 'react';
import { PokeStats } from '../../Interfaces/allPokemons';
import { StatusContainer } from './StatusContainer';
import { Container } from './styled';

interface StatusProps {
  status: PokeStats[];
  bgColor: string;
}
export function Status({ status, bgColor }: StatusProps) {
  const getBigerValue = (array: PokeStats[]): number => {
    let bigValue = 0;
    array.forEach((el) => {
      if (el.base_stat > bigValue) {
        bigValue = el.base_stat;
      }
    });
    return bigValue;
  };

  const biggerValue = useMemo(() => getBigerValue(status), [status]);
  return (
    <Container>
      <h3>Status</h3>
      {status.map((stat) => (
        <StatusContainer
          key={`${stat.stat.name}-${stat.base_stat}`}
          statName={stat.stat.name}
          statValue={stat.base_stat}
          biggerValue={biggerValue}
          bgColor={bgColor}
        />
      ))}
    </Container>
  );
}
