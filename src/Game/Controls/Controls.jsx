import React from 'react';
import { usePlayer } from '../Player/playerSlice';

export const Controls = () => {
  const { rollDice } = usePlayer();
  return (
    <div id="controls">
      <button type="button" onClick={() => rollDice()}>Attack!</button>
    </div>
  );
};
