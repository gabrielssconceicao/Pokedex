import { VersionName } from './version-name';

type FlavorTextEntry = {
  flavor_text: string;
  language: {
    name: string;
  };
  version: {
    name: VersionName;
  };
};

export interface FetchPokemonSpecies {
  flavor_text_entries: FlavorTextEntry[];
}
