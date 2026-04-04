import { EggGroupSelector } from './EggGroupSelector';

export function EggGroups() {
  return (
    <section className="flex items-center justify-around gap-3 px-1 py-2">
      <EggGroupSelector />
      <EggGroupSelector />
    </section>
  );
}
