import React from 'react';
import { HealthBar } from './HealthBar';
import { MAX_HEALTH, usePlayer } from './playerSlice';

export const Player = () => {
  const { health, diceA, diceB } = usePlayer();
  return (
    <div id="player" className="actor-wrapper">
      <HealthBar health={health} maxHealth={MAX_HEALTH} />
      <div className="info">
        <img className="image" src="images/player.png" alt="Very strong boy" />
        <div className="dice-wrapper">
          <div id="dice-a">
            dice
            {diceA}
          </div>
          <div id="dice-b">
            dice
            {diceB}
          </div>
        </div>
      </div>
    </div>
  );
};
