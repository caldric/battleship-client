// Imports
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const NewGame = ({ apiURL, setBoards }) => {
  // State Hooks
  const [gameID, setGameID] = useState('');
  const [redirect, setRedirect] = useState(false);

  // Fetch API data function
  const createGame = async () => {
    // Make POST request to API
    const url = `${apiURL}/create/game`;
    const config = {
      method: 'POST',
      body: JSON.stringify({}),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(url, config);
    const data = await response.json();

    // Set states
    setBoards(data);
    setGameID(data._id);
    setRedirect(true);
  };

  useEffect(() => {
    createGame();
  }, []);

  // Render
  if (redirect) return <Redirect to={`/game/${gameID}`} />;
  return <div>Loading...</div>;
};

// Component export
export default NewGame;
