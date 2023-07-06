export interface PokemonDescription {
  flavor_text_entries: FlavorTextEntries[];
}

export interface FlavorTextEntries {
  flavor_text: string;
  language: Language;
}

interface Language {
  name: string;
}

export interface PokeAbilities {
  ability: {
    name: string;
    url: string;
  };
}

export interface EffectEntries {
  effect_entries: Effect[];
  name: string;
}

export interface Effect {
  effect: string;
  language: Language;
}
