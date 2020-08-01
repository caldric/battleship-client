// Import
import React from 'react';
import Square from './Square';

// Component
const Board = ({
  state,
  enemyState,
  apiURL,
  board,
  gameID,
  setGame,
  enemyRandomAttack,
}) => {
  // Event handlers
  const clickHandler = async (event) => {
    // Coordinates of clicked square
    const coordinates = event.currentTarget.id;
    const columnCoordinate = coordinates[0];
    const rowCoordinate = coordinates.slice(1);

    // Get the result of the enemy's coordinates
    const enemyCheck = enemyState[columnCoordinate][rowCoordinate];

    // Make put request
    const url = `${apiURL}/games/${gameID}`;
    const playerMark = enemyCheck ? 'H' : 'M';
    const config = {
      method: 'PUT',
      body: `{"${board}.${columnCoordinate}.${rowCoordinate}":"${playerMark}"}`,
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(url, config);
    const data = await response.json();

    // Change states
    setGame(data);
    enemyRandomAttack();
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
            squares.push(<Square key={`square${row}x${col}`} />);
          } else {
            squares.push(
              <Square key={`square${row}x${col}`} content={currentColumn} />
            );
          }
        } else {
          // Get cell content
          const columnObject = state ? state[currentColumn] : undefined;
          const cellObject = columnObject
            ? columnObject[String(row)]
            : undefined;
          const cellValue = cellObject;

          if (col === 0) {
            squares.push(
              <Square key={`square${row}x${col}`} content={String(row)} />
            );
          } else {
            squares.push(
              <Square
                key={`square${row}x${col}`}
                content={cellValue}
                divId={`${currentColumn}${row}`}
                clickHandler={clickHandler}
                className={'clickable'}
              />
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
