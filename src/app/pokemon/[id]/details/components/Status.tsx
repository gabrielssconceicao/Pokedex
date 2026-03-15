import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function Status() {
  return (
    <div className="py-3">
      <ToggleGroup
        type="single"
        size="sm"
        defaultValue="base"
        variant="default"
        spacing={2}
        className="mx-auto"
      >
        <ToggleGroupItem value="base" aria-label="Base Status">
          Base Status
        </ToggleGroupItem>
        <ToggleGroupItem value="min" aria-label="Minimum Status">
          Minimum Status
        </ToggleGroupItem>
        <ToggleGroupItem value="max" aria-label="Maximum Status">
          Maximum Status
        </ToggleGroupItem>
      </ToggleGroup>

      <section className="flex flex-col gap-3 px-2 py-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="flex items-stretch" key={index}>
            <span className="flex w-18 items-center justify-center rounded-l-2xl bg-pink-600 text-center font-mono text-xs font-semibold">
              PS
            </span>
            <div
              className="flex items-center justify-end rounded-r-2xl bg-pink-400 px-4"
              style={{
                width: '40%',
              }}
            >
              40
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
