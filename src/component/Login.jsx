// Imports
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = ({ apiBaseURL, setSessionUser }) => {
  // State Hooks
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  // Form submission handler
  const submitForm = async (event) => {
    // Prevent page reload
    event.preventDefault();

    // Make post request to server
    const url = `${apiBaseURL}/login`;
    const config = {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(url, config);

    // Store user in app state
    const user = await response.json();
    setSessionUser(user);

    // Change redirect state to true in order to trigger redirect
    setRedirect(true);
  };

  // Render
  if (redirect) return <Redirect to="/" />;
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(event) => {
          setUsername(event.currentTarget.value);
        }}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

// Component export
export default Login;
