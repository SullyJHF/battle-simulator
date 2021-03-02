import React from 'react';
import './actor.scss';
import { Controls } from './Controls/Controls';
import './game.scss';
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
  </div>
);
