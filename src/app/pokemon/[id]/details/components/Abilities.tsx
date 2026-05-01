'use client';
import { PokemonCard } from '@/components/pokemon-card';
import { Drawer } from '@/components/ui/drawer';
import { Skeleton } from '@/components/ui/skeleton';
import { PokemonType } from '@/constants/pokemon-types';
import { usePokemon } from '@/hooks/use-pokemon';
import { usePokemomAbilities } from '@/hooks/use-pokemon-abilities';
import { getPokemonColors } from '@/utils/get-pokemon-colors';

import { DrawerContainer } from './drawer/drawer-container';
import { DrawerContent } from './drawer/drawer-content';
import { DrawerTrigger } from './drawer/drawer-trigger';

type AbilityProps = {
  id: string;
};

export function Abilities({ id }: AbilityProps) {
  const { data: pokemon } = usePokemon({ pokemon: id });
  const { data: abilities, isLoading } = usePokemomAbilities({
    abilities: pokemon?.abilities,
  });
  const { bg, text, border } = getPokemonColors(
    pokemon?.types[0] as PokemonType
  );

  return (
    <section className="flex flex-wrap items-stretch gap-3 px-1 py-2">
      {isLoading && <Skeleton className="h-8 w-full" />}

      {pokemon &&
        abilities &&
        abilities.map(({ effect_entries, id, is_hidden, name, pokemons }) => (
          <Drawer key={id}>
            <DrawerTrigger
              bg={bg.default}
              border={border}
              text={text.default}
              textInverse={text.inverse}
              isHidden={is_hidden}
            >
              {name}
            </DrawerTrigger>
            <DrawerContent
              bgColor={bg.default}
              textColor={text.default}
              title={name}
              description={`${pokemon.name} ${is_hidden ? 'hidden' : ''} ability`}
            >
              <section className="flex grow flex-col space-y-3 overflow-y-auto px-5 py-4">
                {effect_entries && (
                  <>
                    <DrawerContainer
                      color={text.default}
                      title={'Effect'}
                      description={effect_entries.short_effect}
                    />
                    <DrawerContainer
                      color={text.default}
                      title={'Detailed description'}
                      description={effect_entries.effect}
                    />
                  </>
                )}
                {pokemons.length && (
                  <DrawerContainer
                    color={text.default}
                    title="Pokmeons with the same ability"
                  >
                    <div className="flex flex-1 flex-wrap items-center justify-center gap-3 px-4 py-3">
                      {pokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                      ))}
                    </div>
                  </DrawerContainer>
                )}
              </section>
            </DrawerContent>
          </Drawer>
        ))}
    </section>
  );
}
