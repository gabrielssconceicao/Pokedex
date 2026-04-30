import { FetchPokemonSpecies } from '@/interface/fetch-pokemon-species';
import { PokemonSpecies } from '@/interface/pokemon-species';
import { VersionName } from '@/interface/version-name';

export function formatPokemonSpecies(
  species: FetchPokemonSpecies,
  version: VersionName
): PokemonSpecies {
  return {
    flavor_text:
      species.flavor_text_entries.find(
        (entry) =>
          entry.language.name === 'en' && entry.version.name === version
      )?.flavor_text || '',
  };
}
