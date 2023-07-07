import { useEffect, useState } from 'react';
import {
  PokeAbilities,
  EffectEntries,
} from '../../Interfaces/pokemonDescription';
import { Container } from './styled';
import { Ability } from './Ability';
import { getPokemonData } from '../../api';

interface AbilitiesProps {
  abilities: PokeAbilities[];
  bgColor: string;
}
export function Abilities({ abilities, bgColor }: AbilitiesProps) {
  const [ability, setAbility] = useState<EffectEntries[]>([]);

  useEffect(() => {
    const promisseArray = abilities.map((abilit) =>
      getPokemonData(abilit.ability.url)
    );
    Promise.allSettled(promisseArray).then((response) => {
      const values: EffectEntries[] = [];
      response.map((data) => {
        if (data.status === 'fulfilled') {
          values.push(data.value);
        }
      });
      setAbility(values);
    });
  }, [abilities]);

  return (
    <Container bgColor={bgColor}>
      <h3>Abilities</h3>
      {/* Ver error nos últimos pokemon */}
      <div className="abilities">
        {ability.map((abl, index) => (
          <Ability
            // eslint-disable-next-line react/no-array-index-key
            key={`${abl.name}-${index}`}
            abilityName={`${abl.name}`}
            effectEntry={abl.effect_entries}
          />
        ))}
      </div>
    </Container>
  );
}
