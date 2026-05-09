'use client';

import { useState } from 'react';

import { LearnMove } from '@/interface/pokemon-moves';

export function useMove() {
  const [moveType, setMoveType] = useState<LearnMove>('level-up');

  function handleValueChange(value: LearnMove) {
    setMoveType(value);
  }

  return { moveType, handleValueChange };
}
