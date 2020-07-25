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
    console.log('Triggered');
    getSession();
    console.log('Session user inside: ', sessionUser);
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
          <li>
            <button type="button" onClick={destroySession}>
              Logout
            </button>
          </li>
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
