export interface FetchAbilily {
  effect_entries: Array<{
    effect: string;
    language: { name: string };
    short_effect: string;
  }>;
  id: number;
  name: string;
  pokemon: Array<{ pokemon: { name: string } }>;
}
