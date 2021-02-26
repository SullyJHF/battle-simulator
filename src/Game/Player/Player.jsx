import React from 'react';
import { usePlayer } from './playerSlice';

export const Player = () => {
  const { playerHealth } = usePlayer();
  return (
    <div id="player-wrapper">
      <div id="health">{playerHealth}</div>
      <div id="name">
        Strong Boi
      </div>
    </div>
  );
};
