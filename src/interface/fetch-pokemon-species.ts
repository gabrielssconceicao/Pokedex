import { VersionName } from './version-name';

export type FlavorTextEntry = {
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
  varieties: Array<{ is_default: boolean; pokemon: { name: string } }>;
  egg_groups: Array<{ url: string }>;
  evolution_chain: { url: string };
}
