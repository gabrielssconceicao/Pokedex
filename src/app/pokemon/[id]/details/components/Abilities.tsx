import { AbilityDrawer } from './AbilityDrawer';

export function Abilities() {
  return (
    <section className="flex flex-wrap items-stretch gap-3 px-1 py-2">
      <AbilityDrawer />
      <AbilityDrawer />
      <AbilityDrawer isHidden />
    </section>
  );
}
