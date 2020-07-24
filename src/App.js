// Imports
// React
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import Nav from './component/Nav';
import Footer from './component/Footer';
import Profile from './component/Profile';
import Landing from './component/Landing';
import Signup from './component/Signup';
import Login from './component/Login';
import Game from './component/Game';
import Error from './component/Error';

// Configuration
const API = {
  local: 'http://localhost:8080',
  deployment: 'https://gentle-temple-22561.herokuapp.com',
  index: 'battleship',
};
const baseURL =
  process.env && process.env.NODE_ENV === 'development'
    ? API.local
    : API.deployment;

// Functional react component
const App = () => {
  // State Hook: [stateVariable, stateVariableSetter] = useState(initialState);
  const [data, setData] = useState([]);
  const [sessionUser, setSessionUser] = useState('');

  // // Fetch API data function
  // const getData = async () => {
  //   // Send GET request to API
  //   const url = `${baseURL}/${API.index}`;
  //   const response = await fetch(url);
  //   const data = await response.json();

  //   // Set state
  //   setData(data);
  // };

  // // UseEffect Hook: call getData() on mount
  // useEffect(() => {
  //   console.log('Triggered!');
  //   getData();
  // }, []);

  // Render
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/signup"
          render={() => <Signup apiBaseURL={baseURL} />}
        />
        <Route
          exact
          path="/login"
          render={() => (
            <Login apiBaseURL={baseURL} setSessionUser={setSessionUser} />
          )}
        />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/game" component={Game} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
};

// Component export
export default App;
