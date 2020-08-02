// Import
import React, { useEffect } from 'react';
import Square from './Square';

const YourBoard = ({ apiURL, gameID, currShip, userBoard, setGame }) => {
  // State Hooks
  // Initialize board to a 10x10 array of blank strings ('')
  const arrOfBlankStrings = JSON.parse(
    JSON.stringify(Array(10).fill(Array(10).fill('')))
  );
  // On mount function
  useEffect(() => {
    setGame(arrOfBlankStrings);
  }, []);

  // Event handlers
  const clickHandler = async (event) => {
    // Coordinates of clicked square
    const coordinates = event.currentTarget.id;
    const columnCoordinate = coordinates[0];
    const rowCoordinate = coordinates.split('-')[0].slice(1);

    // Add to object containing coordinates of ship location that
    let placedShip = {};
    // If rotated is true then ship is horizontal. Set horiz and vert values as opposite numbers for use in incrementation.
    const isHoriz = currShip.rotate ? 1 : 0;
    const isVert = currShip.rotate ? 0 : 1;
    for (let i = 0; i < currShip.length; i++) {
      // convert column letter to number in order to increment it and then convert it back to a letter for new column
      const colLetter = String.fromCharCode(
        columnCoordinate.charCodeAt(0) + isHoriz * i
      );
      // Format key in way that is readable for backend Mongo database
      const boardKeyName = `userBoard.${colLetter}.${
        parseInt(rowCoordinate, 10) + isVert * i
      }`;
      // Set object value as first 2 characters of ship name to show up on board. If there are overlapping locations then append them.
      placedShip[boardKeyName]
        ? (placedShip[boardKeyName] += ',' + currShip.name.substr(0, 2))
        : (placedShip[boardKeyName] = currShip.name.substr(0, 2));
    }

    // Make put request
    const url = `${apiURL}/games/${gameID}`;
    const config = {
      method: 'PUT',
      body: JSON.stringify(placedShip),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(url, config);
    const data = await response.json();

    // Change states
    setGame(data);
    console.log(`yourboard -> data`, data);
  };

  // Generate 10x10 board with labels
  const generateBoard = () => {
    const squares = [];
    const numSquares = 11;
    for (let row = 0; row < numSquares; ++row) {
      for (let col = 0; col < numSquares; ++col) {
        const currentColumn = String.fromCharCode(64 + col);

        if (row === 0) {
          if (col === 0) {
            squares.push(<Square key={`yourSquare${row}x${col}`} />);
          } else {
            squares.push(
              <Square key={`yourSquare${row}x${col}`} content={currentColumn} />
            );
          }
        } else {
          // Get cell content
          const columnObject = userBoard ? userBoard[currentColumn] : undefined;
          const cellObject = columnObject
            ? columnObject[String(row)]
            : undefined;
          const cellValue = cellObject;

          if (col === 0) {
            squares.push(
              <Square key={`yourSquare${row}x${col}`} content={String(row)} />
            );
          } else {
            squares.push(
              <Square
                key={`yourSquare${row}x${col}`}
                content={cellValue}
                divId={`${currentColumn}${row}-user`}
                clickHandler={clickHandler}
                className={`clickable col-${currentColumn} row-${row}`}
              />
            );
          }
        }
      }
    }
    return squares;
  };

  return <div className="board">{generateBoard()}</div>;
};

// Board export
export default YourBoard;
