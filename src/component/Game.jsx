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
      <div id="allships" className="allships">
        <div id="carrier" className="image ships">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div id="battleship" className="image ships">
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div id="cruiser" className="image ships">
          <Square />
          <Square />
          <Square />
        </div>
        <div id="submarine" className="image ships">
          <Square />
          <Square />
          <Square />
        </div>
        <div id="destroyer" className="image ships">
          <Square />
          <Square />
        </div>
      </div>
    </div>
  );
};

export default Game;
