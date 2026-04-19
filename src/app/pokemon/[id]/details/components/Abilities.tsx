import { PokemonCard } from '@/components/pokemon-card';
import { Drawer } from '@/components/ui/drawer';
import { getPokemonColors } from '@/constants/pokemon-types';

import { DrawerContainer } from './drawer/drawer-container';
import { DrawerContent } from './drawer/drawer-content';
import { DrawerTrigger } from './drawer/drawer-trigger';

const pokemonAbilities = {
  pokemon: 'Pikachu',
  abilities: Array.from({ length: 3 }).map((_, index) => ({
    isHidden: index % 2 === 0,
    name: `Ability name ${index + 1}`,
    efect: 'lorem ipsum dolor',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste voluptates doloribus ipsa vel impedit suscipit, animi quod!',
    pokemons: Array.from({ length: 10 }).map((_, index) => ({
      id: index + 1,
      img: '/pokemon-egg.png',
      name: 'Charmander',
      types: ['fire'],
    })),
  })),
};

export function Abilities() {
  const { bg, text, border, textInverse } = getPokemonColors('fire');
  return (
    <section className="flex flex-wrap items-stretch gap-3 px-1 py-2">
      {pokemonAbilities.abilities.map(
        ({ description, efect, isHidden, name, pokemons }) => (
          <Drawer key={name}>
            <DrawerTrigger
              bg={bg}
              border={border}
              text={text}
              textInverse={textInverse}
              isHidden={isHidden}
            >
              {name}
            </DrawerTrigger>
            <DrawerContent
              bgColor={bg}
              textColor={text}
              title={name}
              description={`${pokemonAbilities.pokemon} ${isHidden && 'hidden'} ability`}
            >
              <section className="flex grow flex-col space-y-3 overflow-y-auto px-5 py-4">
                <DrawerContainer
                  color={text}
                  title={'Effect'}
                  description={efect}
                />
                <DrawerContainer
                  color={text}
                  title={'Detailed description'}
                  description={description}
                />
                {pokemons.length && (
                  <DrawerContainer
                    color={text}
                    title="Pokmeons with the same ability"
                  >
                    <div className="flex flex-1 flex-wrap items-center justify-center gap-3 px-4 py-3">
                      {pokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.id} {...pokemon} />
                      ))}
                    </div>
                  </DrawerContainer>
                )}
              </section>
            </DrawerContent>
          </Drawer>
        )
      )}
    </section>
  );
}
