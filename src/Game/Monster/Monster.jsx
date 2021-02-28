import React from 'react';
import { useMonster } from './monsterSlice';

export const Monster = () => {
  const { health, diceA, diceB } = useMonster();
  return (
    <div id="player-wrapper">
      <div id="health">{health}</div>
      <div id="dice-a">{diceA}</div>
      <div id="dice-b">{diceB}</div>
      <div id="name">
        Strong Boi
      </div>
    </div>
  );
};
