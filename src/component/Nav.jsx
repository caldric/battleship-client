// Imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ getSession, sessionUser }) => {
  // Logout on click handler
  const destroySession = () => {
    sessionStorage.setItem('user', '');
    getSession();
  };

  useEffect(() => {
    getSession();
  }, []);

  // Render
  return (
    <nav>
      <ul>
        <li>Burger icon</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        {sessionUser ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/new/game">New game</Link>
            </li>
            <li>
              <button type="button" onClick={destroySession}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

// Component export
export default Nav;
