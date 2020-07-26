// Imports
// React
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import Nav from './component/Nav';
import Footer from './component/Footer';
import Profile from './component/Profile';
import Landing from './component/Landing';
import Signup from './component/Signup';
import Login from './component/Login';
import Game from './component/Game';
import NewGame from './component/NewGame';
import Error from './component/Error';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  const [sessionUser, setSessionUser] = useState('');

  const getSession = () => {
    const userString = sessionStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : userString;
    setSessionUser(user);
  };

  // // Fetch API data function
  // const getData = async () => {
  //   // Send GET request to API
  //   const url = `${baseURL}/${API.index}`;
  //   const response = await fetch(url);
  //   const data = await response.json();

  //   // Set state
  //   setData(data);
  // };

  // UseEffect Hook: call getData() on mount
  // useEffect(() => {
  //   console.log('Triggered!');
  //   console.log('Session user: ', JSON.parse(sessionStorage.getItem('user')));
  //   // getData();
  // }, []);

  // Render
  return (
    <div>
      <Nav getSession={getSession} sessionUser={sessionUser} />
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
          render={() => <Login apiBaseURL={baseURL} getSession={getSession} />}
        />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/new/game">
          <NewGame apiURL={`${baseURL}/${API.index}`} />
        </Route>
        <Route path="/game/:gameID">
          <Game apiURL={`${baseURL}/${API.index}`} />
        </Route>
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
};

// Component export
export default App;
