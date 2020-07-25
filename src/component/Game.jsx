// Imports
import React, { useEffect, useState } from 'react';
import Board from './Board';
import Square from './Square';

const Game = ({ apiURL }) => {
  // State Hook
  const [boards, setBoards] = useState({ board1: {}, board2: {} });

  // Fetch API data function
  const getData = async () => {
    // Make POST request to API
    const url = `${apiURL}/create/game`;
    const config = {
      method: 'POST',
      body: JSON.stringify({}),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(url, config);
    const data = response ? await response.json() : undefined;

    // Set state
    setBoards(data);
  };

  useEffect(() => {
    getData();
    console.log('Boards in effect: ', boards);
  }, []);

  return (
    <div>
      <h1>The Game</h1>
      <p>ENEMY SHIPS</p>
      <Board state={boards.board1} />
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
