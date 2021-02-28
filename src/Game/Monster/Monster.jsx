import React from 'react';
import { HealthBar } from '../Player/HealthBar';
import { MAX_HEALTH } from '../Player/playerSlice';
import { useMonster } from './monsterSlice';

export const Monster = () => {
  const { health, diceA, diceB } = useMonster();
  return (
    <div className="actor-wrapper" id="monster">
      <HealthBar health={health} maxHealth={MAX_HEALTH} />
      <div id="dice-a">{diceA}</div>
      <div id="dice-b">{diceB}</div>
      <div id="name">
        Evil Boi
      </div>
    </div>
  );
};
