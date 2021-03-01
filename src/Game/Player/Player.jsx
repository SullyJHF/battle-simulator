import React from 'react';
import { Die } from '../Die/Die';
import { ROLLING, useGame } from '../gameSlice';
import { HealthBar } from './HealthBar';
import { MAX_HEALTH, usePlayer } from './playerSlice';

export const Player = () => {
  const { health, diceA, diceB } = usePlayer();
  const { phase } = useGame();
  return (
    <div id="player" className="actor-wrapper">
      <HealthBar health={health} maxHealth={MAX_HEALTH} />
      <div className="info">
        <img className="image" src="images/player.png" alt="Very strong boy" />
        <div className="dice-wrapper">
          <Die value={diceA} rolling={phase === ROLLING} />
          <Die value={diceB} rolling={phase === ROLLING} />
        </div>
      </div>
    </div>
  );
};
