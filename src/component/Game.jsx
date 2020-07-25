// Imports
import React, { useEffect, useState } from 'react';
import Board from './Board';
import Square from './Square';

const Game = ({ apiURL }) => {
  return (
    <div>
      <h1>The Game</h1>
      <p>ENEMY SHIPS</p>
      <Board state={{}} />
      <p>YOUR SHIPS</p>
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
