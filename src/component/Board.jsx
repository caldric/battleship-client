// Import
import React from 'react';

const Board = ({ state, apiURL, board, gameID, setGame }) => {
  // Event handlers
  const clickHandler = async (event) => {
    // Coordinates of clicked square
    const coordinates = event.currentTarget.id;
    const columnCoordinate = coordinates[0];
    const rowCoordinate = coordinates.slice(1);
    console.log('Coords', columnCoordinate, rowCoordinate);

    // Make put request
    const url = `${apiURL}/games/${gameID}`;
    const config = {
      method: 'PUT',
      body: `{"${board}.${columnCoordinate}.${rowCoordinate}":"X"}`,
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(url, config);
    const data = await response.json();

    // Change states
    setGame(data);
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
            squares.push(<div className="square"> </div>);
          } else {
            squares.push(
              <div className="square">{String.fromCharCode(64 + col)}</div>
            );
          }
        } else {
          const columnObject = state ? state[currentColumn] : undefined;
          const cellObject = columnObject
            ? columnObject[String(row)]
            : undefined;
          const cellValue = cellObject;

          if (col === 0) {
            squares.push(<div className="square">{row}</div>);
          } else {
            squares.push(
              <div
                className={`square col-${currentColumn} row-${row}`}
                id={`${currentColumn}${row}`}
                onClick={clickHandler}
              >
                {cellValue}
              </div>
            );
          }
        }
      }
    }
    return squares;
  };

  // Render
  return <div className="board">{generateBoard()}</div>;
};

// Board export
export default Board;
