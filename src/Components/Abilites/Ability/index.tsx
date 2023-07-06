import { Effect } from '../../../Interfaces/pokemonDescription';
import { Container } from './styled';

interface AbilityProps {
  abilityName: string;
  effectEntry: Effect[];
}
export function Ability({ abilityName, effectEntry }: AbilityProps) {
  const engEffect = effectEntry.filter(
    (effect) => effect.language.name === 'en'
  );

  return (
    <Container>
      {engEffect.length !== 0 ? (
        <>
          <div className="abilityName">{abilityName}</div>
          <div className="abilityDesc">{engEffect[0].effect}</div>
        </>
      ) : (
        <h3>Ability not Found</h3>
      )}
    </Container>
  );
}
