import React from 'react';
import { Die } from '../Die/Die';
import { ROLLING, useGame } from '../gameSlice';
import { HealthBar } from '../Player/HealthBar';
import { MAX_HEALTH } from '../Player/playerSlice';
import { useMonster } from './monsterSlice';

export const Monster = () => {
  const { health, diceA, diceB } = useMonster();
  const { phase } = useGame();
  return (
    <div className="actor-wrapper" id="monster">
      <HealthBar health={health} maxHealth={MAX_HEALTH} reverse />
      <div className="info">
        <div className="dice-wrapper">
          <Die value={diceA} rolling={phase === ROLLING} />
          <Die value={diceB} rolling={phase === ROLLING} />
        </div>
        <img src="images/monster.png" alt="Big scary monster" />
      </div>
    </div>
  );
};
