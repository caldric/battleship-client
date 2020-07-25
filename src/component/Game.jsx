import React from 'react';
import Board from './Board';

const Game = () => {
  return (
    <div>
      <h1>The Game</h1>
      <p>ENEMY SHIPS</p>
      <Board />
      <p>YOUR SHIPS</p>
      <Board />
    </div>
  );
};

export default Game;
