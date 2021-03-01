import React from 'react';
import { useAttack, useGame } from '../gameSlice';
import './controls.scss';

export const Controls = () => {
  const attack = useAttack();
  const { phase } = useGame();
  return (
    <div id="controls">
      <div id="info">{phase}</div>
      <button type="button" onClick={() => attack()}>Attack!</button>
    </div>
  );
};
