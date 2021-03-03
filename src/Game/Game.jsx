import React from 'react';
import './actor.scss';
import { Controls } from './Controls/Controls';
import './game.scss';
import { LOSE, useGame, useReset, WIN } from './gameSlice';
import { Monster } from './Monster/Monster';
import { Player } from './Player/Player';

export const Game = () => (
  <div id="game-wrapper">
    <h1 id="title">Super Awesome Battle Simulator!</h1>
    <div id="game">
      <Player />
      <Controls />
      <Monster />
    </div>
    <GameOver />
  </div>
);

const GameOver = () => {
  const { phase } = useGame();
  const reset = useReset();
  if (phase !== WIN && phase !== LOSE) return null;

  const gameOverText = phase === WIN ? 'You Win!' : 'Game Over';

  return (
    <div id="game-over">
      <h1 className={phase}>{gameOverText}</h1>
      <button
        className="button"
        type="button"
        onClick={() => reset()}
      >
        Play Again?
      </button>
    </div>
  );
};
