import React from 'react';
import { HealthBar } from './HealthBar';
import { MAX_HEALTH, usePlayer } from './playerSlice';

export const Player = () => {
  const { health, diceA, diceB } = usePlayer();
  return (
    <div id="player" className="actor-wrapper">
      <HealthBar health={health} maxHealth={MAX_HEALTH} />
      <div id="dice-a">{diceA}</div>
      <div id="dice-b">{diceB}</div>
      <img src="images/player.png" alt="Very strong boy" />
    </div>
  );
};
