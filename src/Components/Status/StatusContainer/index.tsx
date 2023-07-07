import { Container } from './styled';

interface StatusContainerProps {
  statName: string;
  statValue: number;
  biggerValue: number;
  bgColor: string;
}
export function StatusContainer({
  statName,
  statValue,
  biggerValue,
  bgColor,
}: StatusContainerProps) {
  return (
    <Container
      statusValueWidth={Math.floor((statValue / biggerValue) * 100)}
      bgColor={bgColor}
    >
      <div className="statusName">{statName}</div>
      <div className="statusValue">{statValue}</div>
    </Container>
  );
}
