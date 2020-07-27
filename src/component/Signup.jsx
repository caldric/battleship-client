// Imports
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// Component
const Signup = ({ apiBaseURL }) => {
  // State Hooks
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  // Form submission handler
  const submitForm = async (event) => {
    // Prevent page reload
    event.preventDefault();

    // Make post request to server
    const url = `${apiBaseURL}/signup`;
    const config = {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    };
    await fetch(url, config);

    // Change redirect state to true
    setRedirect(true);
  };

  // Render
  if (redirect) return <Redirect to="/" />;
  return (
    <form className="signup text-center m-4" onSubmit={submitForm}>
      <label className="btn btn-outline-info m-2" htmlFor="name">
        Username
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={username}
        onChange={(event) => setUsername(event.currentTarget.value)}
      />
      <br /> {/* TO-DO: DELETE AFTER CSS */}
      <label className="btn btn-outline-info m-2" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <br /> {/* TO-DO: DELETE AFTER CSS */}
      <button className="btn btn-outline-info m-2" type="submit">
        Sign up
      </button>
    </form>
  );
};

// Component export
export default Signup;
