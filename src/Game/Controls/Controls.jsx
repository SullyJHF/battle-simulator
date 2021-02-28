import React from 'react';
import { useGame } from '../gameSlice';

export const Controls = () => {
  const { attack } = useGame();
  return (
    <div id="controls">
      <button type="button" onClick={() => attack()}>Attack!</button>
    </div>
  );
};
