import { PokemonType } from '@/constants/pokemon-types';

import { PokemonContainer } from '../../components/pokemon-container';
import { DamageBadge, DamageValues } from './components/damage-badge';

const mockItem = (damage: DamageValues) => ({
  type: 'fire' as PokemonType,
  damage,
});

type WeaknessType = 'weakTo' | 'resistantTo' | 'normalDamage';

const weaknesses: Record<
  WeaknessType,
  Array<{ type: PokemonType; damage: DamageValues }>
> = {
  weakTo: Array.from({ length: 5 }).map((_, index) =>
    mockItem(index % 2 === 0 ? 4 : 2)
  ),
  resistantTo: Array.from({ length: 3 }).map((_, index) =>
    mockItem(index % 2 === 0 ? 0.5 : 0.25)
  ),
  normalDamage: Array(6).fill(mockItem(1)),
};

const weaknessMap: Record<WeaknessType, string> = {
  normalDamage: 'Takes normal damage from',
  weakTo: 'Weak to',
  resistantTo: 'Resistant to',
};

export default function Weakness() {
  return (
    <section>
      {Object.entries(weaknesses).map(([key, values]) => (
        <PokemonContainer title={weaknessMap[key as WeaknessType]} key={key}>
          <div className="flex flex-row flex-wrap items-center justify-center gap-1 px-2 py-1">
            {values.map(({ type, damage }) => (
              <DamageBadge key={`${type}`} type={type} damage={damage} />
            ))}
          </div>
        </PokemonContainer>
      ))}
    </section>
  );
}
