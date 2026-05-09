import { ContestType, DamageClass } from '@/constants/move-types';
import { PokemonType } from '@/constants/pokemon-types';

import { VersionName } from './version-name';

export interface MoveResponse {
  id: number;
  name: string;
  accuracy: number | null;
  power: number | null;
  pp: number;
  contest_type: {
    name: ContestType;
  };
  damage_class: {
    name: DamageClass;
  };
  flavor_text_entries: Array<{
    flavor_text: string;
    language: { name: string };
    version: { name: VersionName };
  }>;
  machines: Array<{
    machine: { url: string };
    version_group: { name: VersionName };
  }>;
  type: { name: PokemonType };
}

export interface PokemonMove {
  id: number;
  name: string;
  accuracy: number | null;
  power: number | null;
  pp: number | null;
  contest_type: ContestType;
  damage_class: DamageClass;
  flavor_text_entries: Array<{
    flavor_text: string;
    language: { name: string };
    version: { name: VersionName };
  }>;
  level_learned: number | null;

  machine: string | null;
  type: PokemonType;
}

export type LearnMove = 'level-up' | 'machine' | 'egg' | 'tutor';
