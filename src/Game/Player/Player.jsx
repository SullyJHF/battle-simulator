import React from 'react';
import { usePlayer } from './playerSlice';

export const Player = () => {
  const { playerHealth, diceA, diceB } = usePlayer();
  return (
    <div id="player-wrapper">
      <div id="health">{playerHealth}</div>
      <div id="dice-a">{diceA}</div>
      <div id="dice-b">{diceB}</div>
      <div id="name">
        Strong Boi
      </div>
    </div>
  );
};
