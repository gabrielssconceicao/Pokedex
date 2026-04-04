import { EggGroupDrawer } from './EggGroupDrawer';

export function EggGroups() {
  return (
    <section className="flex flex-wrap items-center justify-around gap-3 px-1 py-2">
      <EggGroupDrawer />
      <EggGroupDrawer />
    </section>
  );
}
