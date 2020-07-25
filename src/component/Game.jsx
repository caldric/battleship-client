import React, { useState } from 'react';
import Board from './Board';
import AllShips from './AllShips';

const Game = () => {
  const [currShip, setCurrShip] = useState({
    name: '',
    length: 0,
    rotate: false,
  });

  return (
    <div>
      <h1>The Game</h1>
      <p>ENEMY SHIPS</p>
      <Board />
      <p>YOUR SHIPS</p>
      <Board currShip={currShip} />
      <AllShips setCurrShip={setCurrShip} />
    </div>
  );
};

export default Game;
