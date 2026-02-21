import { Input } from '@/components/ui/input';

export function Filters() {
  return (
    <section className="px-2 py-3">
      <form action="">
        <div className="flex gap-3">
          <Input placeholder="Id" className="w-20" />
          <Input placeholder="Pokemon Name" className="flex-1" />
        </div>
      </form>
    </section>
  );
}
