// Imports
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

// Component
const NewGame = ({ apiURL }) => {
  // State Hooks
  const [gameID, setGameID] = useState('');
  const [redirect, setRedirect] = useState(false);

  //Randomize placement of enemy computer's ships
  const randomEnemy = () => {
    let allBoardCoordinates = {};
    let colLetter = '';
    let boardKeyName = '';
    let shipsObj = {
      carrier: {
        length: 5,
        coord: [],
      },
      battleship: {
        length: 4,
        coord: [],
      },
      cruiser: {
        length: 3,
        coord: [],
      },
      submarine: {
        length: 3,
        coord: [],
      },
      destroyer: {
        length: 2,
        coord: [],
      },
    };

    for (const ship in shipsObj) {
      //Set orientation randomly and use it to calculate the starting location boundary and whether to increment X or Y
      let isHoriz = Math.floor(Math.random() * 2);
      let isVert = 1 - isHoriz;

      for (let i = 0; i < shipsObj[ship].length; i++) {
        //Create nested array as each new index of main array
        shipsObj[ship].coord.push([]);
        if (i === 0) {
          //Initialize starting location
          //First X coordinate
          shipsObj[ship].coord[i].push(
            Math.floor(Math.random() * (10 - isHoriz * shipsObj[ship].length))
          );
          //First Y coordinate
          shipsObj[ship].coord[i].push(
            Math.floor(Math.random() * (10 - isVert * shipsObj[ship].length))
          );

          //Format object key name to be readable by Mongo database
          colLetter = String.fromCharCode(65 + shipsObj[ship].coord[i][1]);
          boardKeyName = `enemyBoardState.${colLetter}.${
            shipsObj[ship].coord[i][0] + 1
          }`;
          //Add to return object formatted for backend database. If there are overlapping locations then append them.
          allBoardCoordinates[boardKeyName]
            ? (allBoardCoordinates[boardKeyName] += ', ' + ship)
            : (allBoardCoordinates[boardKeyName] = ship);
        } else {
          //Add to previous location depending on orientation
          //Current X coordinate is previous plus direction
          shipsObj[ship].coord[i].push(
            shipsObj[ship].coord[i - 1][0] + isHoriz
          );
          //Current Y coordinate is previous plus direction
          shipsObj[ship].coord[i].push(shipsObj[ship].coord[i - 1][1] + isVert);

          //Format object key name to be readable by Mongo database
          colLetter = String.fromCharCode(65 + shipsObj[ship].coord[i][1]);
          boardKeyName = `enemyBoardState.${colLetter}.${
            shipsObj[ship].coord[i][0] + 1
          }`;
          //Add to return object formatted for backend database. If there are overlapping locations then append them.
          allBoardCoordinates[boardKeyName]
            ? (allBoardCoordinates[boardKeyName] += ', ' + ship)
            : (allBoardCoordinates[boardKeyName] = ship);
        }
      }
    }

    console.log(`randomEnemy -> shipsObj`, shipsObj);
    console.log(
      `createGame -> ${Object.keys(allBoardCoordinates).length} enemyShips`,
      allBoardCoordinates
    );
    return allBoardCoordinates;
  };

  // Create new game function
  const createGame = async () => {
    // Make POST request to API
    const url = `${apiURL}/create/game`;

    // Generate silly computer placement
    let enemyShips = randomEnemy();

    const config = {
      method: 'POST',
      body: JSON.stringify(enemyShips),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(url, config);
    const data = await response.json();

    // Set states
    setGameID(data._id);
    setRedirect(true);
  };

  useEffect(() => {
    createGame();
  }, []);

  // Render
  if (redirect) return <Redirect to={`/game/${gameID}`} />;
  return <div>Loading...</div>;
};

// Component export
export default NewGame;
