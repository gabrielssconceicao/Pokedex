import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { HabilitiesCardDespription } from './components/HabilitiesCardDescription';
import { SpeciesCardDespription } from './components/SpeciesCardDescription';

const species = {
  description:
    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt iste voluptates doloribus ipsa vel impedit suscipit, animi quod!',
  height: '2\'4\" (0.71 m)',
  weight: '10 lbs (4.5 kg)',
};

const habilities = [
  {
    name: 'Hability 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt iste voluptates doloribus ipsa vel impedit suscipit, animi quod!',
  },
];

export default function Details() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-3 px-2 py-3 sm:flex-row sm:items-stretch">
        <aside className="flex w-full items-center justify-center rounded-md bg-amber-400 p-3 sm:w-3/4">
          <Image src={'/pokemon-egg.png'} width={80} height={80} alt="1" />
        </aside>
        <aside className="w-full py-4">
          <Card className="py-2">
            <CardHeader className="border-b-2">
              <CardTitle className="text-center">Species</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <SpeciesCardDespription
                label="Description"
                value={species.description}
                colSpan={2}
              />
              <SpeciesCardDespription label="Weight" value={species.weight} />
              <SpeciesCardDespription label="Height" value={species.height} />
            </CardContent>
          </Card>
        </aside>
      </div>

      <div>
        <Card className="py-2">
          <CardHeader className="border-b-2">
            <CardTitle className="text-center">Evolution</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <HabilitiesCardDespription
              label="Description"
              value={habilities[0].description}
              colSpan={2}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
