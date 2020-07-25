import React, { useState } from 'react';
import Board from './Board';
import AllShips from './AllShips';
import YourBoard from './YourBoard';

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
      <YourBoard currShip={currShip} />
      <AllShips setCurrShip={setCurrShip} />
    </div>
  );
};

export default Game;
