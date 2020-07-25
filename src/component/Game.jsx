// Imports
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Board from './Board';
import Square from './Square';

const Game = ({ apiURL }) => {
  // State Hook
  const [game, setGame] = useState({ board1: {}, board2: {} });

  // Pull out parameters from URL
  const { gameID } = useParams();

  // On mount function
  useEffect(() => {
    getGame();
  }, []);

  // Get game from database
  const getGame = async () => {
    // Make GET request to API
    const url = `${apiURL}/games/${gameID}`;
    const response = await fetch(url);
    const data = await response.json();

    // Set state
    setGame(data);
  };

  // Render
  return (
    <div>
      <h1>The Game</h1>
      <p>ENEMY SHIPS</p>
      <p>Game ID: {gameID}</p>
      <Board
        state={game.board1}
        apiURL={apiURL}
        board={'board1'}
        gameID={game._id}
        setGame={setGame}
      />
      <p>YOUR SHIPS</p>
      <Board
        state={game.board2}
        apiURL={apiURL}
        board={'board2'}
        gameID={game._id}
        setGame={setGame}
      />
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

// Component export
export default Game;
