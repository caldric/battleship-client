// Import
import React from 'react';

// Component
const Landing = () => {
  return (
    <div className="text-center">
      <h1>Battleship</h1>
      <div>
        <p>Signup or Login to start playing!</p>
        <a className="btn btn-outline-info m-2" href="/signup">
          Sign Up
        </a>
        <a className="btn btn-outline-info m-2" href="/login">
          Login
        </a>
      </div>
    </div>
  );
};

// Component export
export default Landing;
