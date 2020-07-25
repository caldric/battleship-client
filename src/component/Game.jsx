import React from 'react';
import Board from './Board';
import Square from './Square';

const Game = () => {
  return (
    <div>
      <h1>The Game</h1>
      <p>ENEMY SHIPS</p>
      <Board />
      <p>YOUR SHIPS</p>
      <Board />
      <div id="carrier" className="ships">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Game;
