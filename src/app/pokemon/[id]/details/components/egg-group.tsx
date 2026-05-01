'use client';
import { PokemonCard } from '@/components/pokemon-card';
import { PokemonCardSkeleton } from '@/components/pokemon-card-skeleton';
import { Drawer } from '@/components/ui/drawer';
import { PokemonType } from '@/constants/pokemon-types';
import { usePokemon } from '@/hooks/use-pokemon';
import { usePokemonSpecies } from '@/hooks/use-pokemon-species';
import { PokemonParamId } from '@/interface/pokemon-param-id';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

import { DrawerContainer } from './drawer/drawer-container';
import { DrawerContent } from './drawer/drawer-content';
import { DrawerTrigger } from './drawer/drawer-trigger';

export function EggGroups({ id }: PokemonParamId) {
  const { data: pokemon } = usePokemon({ pokemon: id });
  const { data: species, isLoading } = usePokemonSpecies({ id: pokemon?.id });
  const { text, bg } = getPokemonColors(pokemon?.types[0] as PokemonType);
  return (
    <section className="flex flex-wrap items-center justify-around gap-3 px-1 py-2">
      {species &&
        species.egg_groups.map(({ id, name, pokemons }) => (
          <Drawer key={id}>
            <DrawerTrigger
              bg={bg.default}
              text={text.default}
              textInverse={text.inverse}
            >
              {name}
            </DrawerTrigger>
            <DrawerContent
              bgColor={bg.default}
              textColor={text.default}
              title={name}
              description={`${name} Egg Group`}
            >
              <section className="grow overflow-y-auto px-5 py-3">
                <DrawerContainer
                  color={text.default}
                  title={'Pokemons from this egg group'}
                >
                  <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-3">
                    {isLoading && <PokemonCardSkeleton />}
                    {pokemons &&
                      pokemons.map((pokemon) => (
                        <PokemonCard
                          key={pokemon.id}
                          pokemon={pokemon}
                          variant="card"
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
