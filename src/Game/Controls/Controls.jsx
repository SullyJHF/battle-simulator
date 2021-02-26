import React from 'react';
import { usePlayer } from '../Player/playerSlice';

export const Controls = () => {
  const { damagePlayer } = usePlayer();
  return (
    <div id="controls">
      <button type="button" onClick={() => damagePlayer(5)}>Attack!</button>
    </div>
  );
};
