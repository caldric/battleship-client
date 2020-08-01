// Import
import React, { useEffect, useState } from 'react';
import Square from './Square';

const YourBoard = ({ currShip, userBoard, setGame }) => {
  // State Hooks
  // Initialize board to a 10x10 array of blank strings ('')
  const arrOfBlankStrings = JSON.parse(
    JSON.stringify(Array(10).fill(Array(10).fill('')))
  );
  // On mount function
  useEffect(() => {
    setGame(arrOfBlankStrings);
  }, []);

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
    const [rowIndex, columnIndex] = convertCoordsToIndices(coordinates);

    // Change board state
    const newBoard = [...userBoard];
    if (!currShip.rotate) {
      for (let i = 0; i < currShip.length; i++) {
        newBoard[rowIndex + i][columnIndex] = 'X';
      }
    } else {
      for (let i = 0; i < currShip.length; i++) {
        newBoard[rowIndex][columnIndex + i] = 'X';
      }
    }
    setGame(newBoard);

    // <Ship length={currShip.length} name={currShip.name} />;
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
                // content={userBoard[row - 1][col - 1]}
                divId={`${currentColumn}${row}`}
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
