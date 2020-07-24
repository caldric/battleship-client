import React from 'react';

const Signup = () => {
  return (
    <form>
      <label htmlFor="name">Username</label>
      <input type="text" name="name" id="name" />
      <br /> {/* TO-DO: DELETE AFTER CSS */}
      <label htmlFor="password">Password</label>
      <input type="text" name="password" id="password" />
      <br /> {/* TO-DO: DELETE AFTER CSS */}
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Signup;
