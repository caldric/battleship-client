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
  const [game, setGame] = useState({
    enemyBoardVisible: {},
    enemyBoardState: {},
    userBoard: {},
  });
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
    const userCheck = game.userBoard[columnCoordinate][rowCoordinate];

    // Make put request
    const url = `${apiURL}/games/${gameID}`;
    const playerMark = userCheck ? 'H' : 'M';
    const config = {
      method: 'PUT',
      body: `{"userBoard.${columnCoordinate}.${rowCoordinate}":"${playerMark}"}`,
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(url, config);
    const data = await response.json();

    // Change states
    setGame(data);
    console.log(
      `{"userBoard.${columnCoordinate}.${rowCoordinate}":"${playerMark}"}`,
      data
    );
    // console.log(`enemyRandomAttack -> enemyState`, game.enemyBoardState);
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
            state={game.enemyBoardVisible}
            enemyState={game.enemyBoardState}
            apiURL={apiURL}
            board={'enemyBoardVisible'}
            gameID={game._id}
            setGame={setGame}
            enemyRandomAttack={enemyRandomAttack}
          />
        </div>
        <div className="boardContainer d-inline-block mx-3 my-2">
          <p className="my-0 text-center">YOUR SHIPS</p>
          <YourBoard
            apiURL={apiURL}
            gameID={game._id}
            currShip={currShip}
            userBoard={game.userBoard}
            setGame={setGame}
          />
        </div>
      </div>
      <AllShips setCurrShip={setCurrShip} />
    </div>
  );
};

// Component export
export default Game;
