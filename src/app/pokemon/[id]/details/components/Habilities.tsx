import { HabilityDrawer } from './HabilityDrawer';

export function Habilities() {
  return (
    <section className="flex flex-wrap items-center justify-around gap-3 px-1 py-2">
      <HabilityDrawer />
      <HabilityDrawer isHidden />
    </section>
  );
}
