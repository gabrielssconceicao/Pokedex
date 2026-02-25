import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Details() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-3 px-2 py-3">
        <aside className="flex w-3/4 items-center justify-center rounded-md bg-amber-400 p-3">
          <Image src={'/pokemon-egg.png'} width={80} height={80} alt="1" />
        </aside>
        <aside className="w-full px-3 py-4">
          <Card>
            <CardHeader className="border-b-2">
              <CardTitle className="text-center">Species</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <CardDescription className="border-accent-foreground/50 text-accent-foreground col-span-2 rounded-md border px-2 py-1 text-center">
                Descrpition
              </CardDescription>
              <CardDescription className="border-accent-foreground/50 text-accent-foreground col-span-1 rounded-md border px-2 py-1 text-center">
                Weight
              </CardDescription>
              <CardDescription className="border-accent-foreground/50 text-accent-foreground col-span-1 rounded-md border px-2 py-1 text-center">
                Height
              </CardDescription>
            </CardContent>
          </Card>
        </aside>
      </div>
    </section>
  );
}
