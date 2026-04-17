import { PokemonType } from '@/constants/pokemon-types';

import { PokemonContainer } from '../../components/pokemon-container';
import { DamageBadge } from './components/DamageBadge';

const mockItem = (damage: 4 | 2 | 1 | 0.5 | 0.25) => ({
  type: 'fire',
  damage,
});

const weaknesses: Record<
  'weakTo' | 'resistantTo' | 'normalDamage',
  Array<{ type: PokemonType; damage: 4 | 2 | 1 | 0.5 | 0.25 }>
> = {
  weakTo: [...Array(4).fill(mockItem(4)), ...Array(4).fill(mockItem(2))],
  resistantTo: [
    ...Array(4).fill(mockItem(0.5)),
    ...Array(4).fill(mockItem(0.25)),
  ],
  normalDamage: Array(4).fill(mockItem(1)),
};

export default function Weakness() {
  return (
    <section>
      <PokemonContainer title="Weak to">
        <div className="flex flex-row flex-wrap items-center justify-center gap-1 px-2 py-1">
          {weaknesses.weakTo.map((item) => (
            <DamageBadge
              key={`${item.type}-${item.damage}`}
              type={item.type}
              damage={item.damage}
            />
          ))}
        </div>
      </PokemonContainer>
      <PokemonContainer title="Resistant to">
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 px-2 py-1">
          {weaknesses.resistantTo.map((item) => (
            <DamageBadge
              key={`${item.type}-${item.damage}`}
              type={item.type}
              damage={item.damage}
            />
          ))}
        </div>
      </PokemonContainer>
      <PokemonContainer title="Takes normal damage from">
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 px-2 py-1">
          {weaknesses.normalDamage.map((item) => (
            <DamageBadge
              key={`${item.type}-${item.damage}`}
              type={item.type}
              damage={item.damage}
            />
          ))}
        </div>
      </PokemonContainer>
    </section>
  );
}
