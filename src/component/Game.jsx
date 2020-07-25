import React from 'react';
import Board from './Board';
import AllShips from './AllShips';

const Game = () => {
  return (
    <div>
      <h1>The Game</h1>
      <p>ENEMY SHIPS</p>
      <Board />
      <p>YOUR SHIPS</p>
      <Board />
      <AllShips />
    </div>
  );
};

export default Game;
