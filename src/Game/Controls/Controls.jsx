import React, { useEffect } from 'react';
import { DAMAGING, IDLE, useAttack, useDamage, useGame } from '../gameSlice';
import './controls.scss';

export const Controls = () => {
  const attack = useAttack();
  const damage = useDamage();
  const { phase } = useGame();
  useEffect(() => {
    if (phase === DAMAGING) {
      damage();
    }
  }, [phase]);
  return (
    <div id="controls">
      <div id="info">{phase}</div>
      <button type="button" disabled={phase !== IDLE} onClick={() => attack()}>Attack!</button>
    </div>
  );
};
