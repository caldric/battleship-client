// Import
import React, { useEffect } from 'react';

// Component
const Landing = ({ getSession, sessionUser }) => {
  useEffect(() => {
    getSession();
  }, []);

  return (
    <div className="text-center m-5">
      <h1>Battleship</h1>
      {sessionUser ? (
        <div>
          <p>Start a new game!</p>
          <a className="btn btn-outline-info m-2" href="/new/game">
            New Game
          </a>
        </div>
      ) : (
        <div>
          <p>Signup or Login to start playing!</p>
          <a className="btn btn-outline-info m-2" href="/signup">
            Sign Up
          </a>
          <a className="btn btn-outline-info m-2" href="/login">
            Login
          </a>
        </div>
      )}
    </div>
  );
};

// Component export
export default Landing;
