import React, { useEffect } from 'react';
import { DAMAGING, IDLE, useAttack, useCheckWin, useDamage, useGame } from '../gameSlice';
import './controls.scss';

export const Controls = () => {
  const attack = useAttack();
  const damage = useDamage();
  const { phase } = useGame();
  const checkWin = useCheckWin();
  useEffect(() => {
    if (phase === DAMAGING) {
      damage();
    }
    if (phase === IDLE) {
      checkWin();
    }
  }, [phase]);
  return (
    <div id="controls">
      <button
        className="button"
        type="button"
        disabled={phase !== IDLE}
        onClick={() => attack()}
      >
        Attack!
      </button>
    </div>
  );
};
