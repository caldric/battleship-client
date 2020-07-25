// Imports
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const NewGame = ({ apiURL, setBoards }) => {
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

    // Set state
    setBoards(data);
  };

  useEffect(() => {
    createGame();
  }, []);

  return <Redirect to="/" />;
};

export default NewGame;
