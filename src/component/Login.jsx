// Imports
import React, { useState } from 'react';

const Login = () => {
  // State Hooks
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Render
  return (
    <form>
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
