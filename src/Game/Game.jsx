import React from 'react';
import { Controls } from './Controls/Controls';
import './game.scss';
import { useGame } from './gameSlice';
import { Monster } from './Monster/Monster';
import { Player } from './Player/Player';

export const Game = () => {
  const { phase } = useGame();
  console.log(`Current game phase: ${phase}`);
  return (
    <div id="game-wrapper">
      <h1 id="title">Super Awesome Battle Simulator!</h1>
      <div id="game">
        <Player />
        <Controls />
        <Monster />
      </div>
    </div>
  );
};