// Imports
// React
import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
// Bootstrap
import { Button } from 'react-bootstrap';
// Components
import AllShips from './AllShips';
import Board from './Board';
import YourBoard from './YourBoard';

const Game = ({ apiURL }) => {
  // State Hook
  const [game, setGame] = useState({ board1: {}, board2: {} });
  const [currShip, setCurrShip] = useState({
    name: '',
    length: 0,
    rotate: false,
  });
  const [redirect, setRedirect] = useState(false);

  // Pull out parameter from URL
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

  // Form submission handler
  const deleteGame = async (event) => {
    // Prevent page reload
    event.preventDefault();

    // Make post request to API
    const url = `${apiURL}/games/${gameID}`;
    await fetch(url, { method: 'DELETE' });

    // Change redirect state to true in order to trigger redirect
    setRedirect(true);
  };

  // Randomly attack user
  const enemyRandomAttack = async () => {
    let columnCoordinate = Math.floor(Math.random() * 10 + 1);
    columnCoordinate = String.fromCharCode(64 + columnCoordinate);
    let rowCoordinate = Math.floor(Math.random() * 10 + 1);

    // Get the result of the user's coordinates
    const userCheck = game.board1[columnCoordinate][rowCoordinate];

    // Make put request
    const url = `${apiURL}/games/${gameID}`;
    const playerMark = userCheck ? 'H' : 'M';
    const config = {
      method: 'PUT',
      body: `{"board1.${columnCoordinate}.${rowCoordinate}":"${playerMark}"}`,
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(url, config);
    const data = await response.json();

    // Change states
    setGame(data);
    console.log(`enemyRandomAttack -> state`, game.board1);
    console.log(`enemyRandomAttack -> enemyState`, game.board2);
  };

  // Render
  if (redirect) return <Redirect to="/" />;
  return (
    <div className="text-center">
      <h1>The Game</h1>
      <p>Game URL: {window.location.href}</p>
      <Button
        type="button"
        id="deleteGame"
        onClick={deleteGame}
        variant="danger"
      >
        End Game
      </Button>
      <div className="allBoards m-auto text-center">
        <div className="boardContainer d-inline-block mx-3 my-2">
          <p className="my-0 text-center">ENEMY SHIPS</p>
          <Board
            state={game.board1}
            enemyState={game.board2}
            apiURL={apiURL}
            board={'board1'}
            gameID={game._id}
            setGame={setGame}
            enemyRandomAttack={enemyRandomAttack}
          />
        </div>
        <div className="boardContainer d-inline-block mx-3 my-2">
          <p className="my-0 text-center">YOUR SHIPS</p>
          <YourBoard currShip={currShip} />
        </div>
      </div>
      <AllShips setCurrShip={setCurrShip} />
    </div>
  );
};

// Component export
export default Game;
