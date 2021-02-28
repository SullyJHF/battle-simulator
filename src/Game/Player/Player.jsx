import React from 'react';
import { usePlayer } from './playerSlice';

export const Player = () => {
  const { health, diceA, diceB } = usePlayer();
  return (
    <div id="player-wrapper">
      <div id="health">{health}</div>
      <div id="dice-a">{diceA}</div>
      <div id="dice-b">{diceB}</div>
      <div id="name">
        Strong Boi
      </div>
    </div>
  );
};
