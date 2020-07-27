// Import
import React from 'react';

const getUser = () => {
  const rawString = sessionStorage.getItem('user');
  const userObject = JSON.parse(rawString);
  return userObject.username;
};

// Component
const Profile = () => {
  return (
    <div className="text-center m-4">
      <h1>Profile Page </h1>
      <h5>Username: {getUser()}</h5>
      <h5>Wins</h5>
      <h5>Losses</h5>
      <h5>Total Games</h5>
    </div>
  );
};

// Component export
export default Profile;
