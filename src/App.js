// Imports
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Profile from './component/Profile';
import Landing from './component/Landing';
import Signup from './component/Signup';
import Game from './component/Game';

// Configuration
const API = {
  local: 'http://localhost:8080',
  deployment: 'https://gentle-temple-22561.herokuapp.com',
  index: 'index',
};
const baseURL =
  process.env && process.env.NODE_ENV === 'development'
    ? API.local
    : API.deployment;

// Functional react component
const App = () => {
  // State Hook: [stateVariable, stateVariableSetter] = useState(initialState);
  const [data, setData] = useState([]);

  // Fetch API data function
  const getData = async () => {
    // Send GET request to API
    const url = `${baseURL}/${API.index}`;
    const response = await fetch(url);
    const data = await response.json();

    // Set state
    setData(data);
  };

  // UseEffect Hook: call getData() on mount
  useEffect(() => {
    console.log('Triggered!');
    getData();
  }, []);

  // Render
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/game" component={Game} />
      </Switch>
      <Footer />
    </div>
  );
};

// Component export
export default App;
