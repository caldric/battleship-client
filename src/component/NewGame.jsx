// Imports
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const NewGame = ({ apiURL }) => {
  // State Hooks
  const [gameID, setGameID] = useState('');
  const [redirect, setRedirect] = useState(false);

  // Create new game function
  const createGame = async () => {
    // Make POST request to API
    const url = `${apiURL}/create/game`;

    // Generate silly computer placement

    const config = {
      method: 'POST',
      body: JSON.stringify({
        'board2.A.1': 'X',
        'board2.A.2': 'X',
        'board2.A.3': 'X',
        'board2.A.4': 'X',
        'board2.A.5': 'X',
        'board2.B.1': 'X',
        'board2.B.2': 'X',
        'board2.B.3': 'X',
        'board2.B.4': 'X',
        'board2.C.1': 'X',
        'board2.C.2': 'X',
        'board2.C.3': 'X',
        'board2.D.1': 'X',
        'board2.D.2': 'X',
        'board2.D.3': 'X',
        'board2.E.1': 'X',
        'board2.E.2': 'X',
      }),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(url, config);
    const data = await response.json();

    // Set states
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
