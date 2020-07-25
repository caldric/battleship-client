// Import
import React, { useState } from 'react';

const Board = ({ state }) => {
  // State Hooks
  // Initialize board to a 10x10 array of blank strings ('')
  const arrOfBlankStrings = JSON.parse(
    JSON.stringify(Array(10).fill(Array(10).fill('')))
  );
  const [board, setBoard] = useState(arrOfBlankStrings);

  const convertCoordsToIndices = (coordinates) => {
    // Convert column letter to number: A=0, B=1, ..., J=9
    const columnIndex = coordinates[0].charCodeAt() - 65;
    // Chars after the first char: 1=>0, 2=>1, ..., 10=>9
    const rowIndex = parseInt(coordinates.slice(1)) - 1;

    return [rowIndex, columnIndex];
  };

  // Event handlers
  const clickHandler = (event) => {
    // Coordinates of clicked square
    const coordinates = event.currentTarget.id;
    const columnCoordinate = coordinates[0];
    const rowCoordinate = coordinates.slice(1);
    console.log('Coords', columnCoordinate, rowCoordinate);
    // const [rowIndex, columnIndex] = convertCoordsToIndices(coordinates);

    // // Change board state
    // const newBoard = [...board];
    // newBoard[rowIndex][columnIndex] = 'X';
    // setBoard(newBoard);
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

  return <div className="board">{generateBoard()}</div>;
};

// Board export
export default Board;
