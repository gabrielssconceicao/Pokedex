import { PokemonCard } from '@/components/pokemon-card';
import { Drawer } from '@/components/ui/drawer';
import { getPokemonColors } from '@/constants/pokemon-types';

import { DrawerContainer } from './drawer/drawer-container';
import { DrawerContent } from './drawer/drawer-content';
import { DrawerTrigger } from './drawer/drawer-trigger';

const eggGroups = Array.from({ length: 3 }).map((_, index) => ({
  id: index + 1,
  name: `Watter Egg ${index + 1}`,
  pokemons: Array.from({ length: 10 }).map((_, index) => ({
    id: index + 1,
    img: '/pokemon-egg.png',
    name: 'Charmander',
    types: ['fire'],
  })),
}));

export function EggGroups() {
  const { text, bg, textInverse } = getPokemonColors('fire');
  return (
    <section className="flex flex-wrap items-center justify-around gap-3 px-1 py-2">
      {eggGroups.map(({ id, name, pokemons }) => (
        <Drawer key={id}>
          <DrawerTrigger bg={bg} text={text} textInverse={textInverse}>
            {name}
          </DrawerTrigger>
          <DrawerContent
            bgColor={bg}
            textColor={text}
            title={name}
            description={`${name} Egg Group`}
          >
            <section className="grow overflow-y-auto px-5 py-3">
              <DrawerContainer
                color={text}
                title={'Pokemons from this egg group'}
              >
                <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-3">
                  {pokemons.map(({ id, img, name, types }) => (
                    <PokemonCard
                      key={id}
                      id={id}
                      img={img}
                      name={name}
                      types={types}
                    />
                  ))}
                </div>
              </DrawerContainer>
            </section>
          </DrawerContent>
        </Drawer>
      ))}
    </section>
  );
}
