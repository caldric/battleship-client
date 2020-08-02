// Imports
// React
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// Bootstrap basic functionality
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Error from './component/Error';
import Footer from './component/Footer';
import Game from './component/Game';
import Landing from './component/Landing';
import Login from './component/Login';
import Nav from './component/Nav';
import NewGame from './component/NewGame';
import Profile from './component/Profile';
import Signup from './component/Signup';

// Component
const App = () => {
  // State Hook
  const [sessionUser, setSessionUser] = useState('');

  // API index route
  const apiIndex = '/battleship';

  // Get session function
  const getSession = () => {
    const userString = sessionStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : userString;
    setSessionUser(user);
  };

  // Render
  return (
    <div>
      <Nav getSession={getSession} sessionUser={sessionUser} />
      <Switch>
        <Route exact path="/">
          <Landing getSession={getSession} sessionUser={sessionUser} />
        </Route>
        <Route exact path="/signup">
          <Signup getSession={getSession} />
        </Route>
        <Route exact path="/login">
          <Login getSession={getSession} />
        </Route>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/new/game">
          <NewGame index={apiIndex} />
        </Route>
        <Route path="/game/:gameID">
          <Game index={apiIndex} />
        </Route>
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
};

// Component export
export default App;
