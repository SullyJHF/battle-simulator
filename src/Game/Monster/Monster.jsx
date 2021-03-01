import React from 'react';
import { HealthBar } from '../Player/HealthBar';
import { MAX_HEALTH } from '../Player/playerSlice';
import { useMonster } from './monsterSlice';

export const Monster = () => {
  const { health, diceA, diceB } = useMonster();
  return (
    <div className="actor-wrapper" id="monster">
      <HealthBar health={health} maxHealth={MAX_HEALTH} />
      <div className="info">
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
        <img src="images/monster.png" alt="Big scary monster" />
      </div>
    </div>
  );
};
