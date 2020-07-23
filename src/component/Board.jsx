import React from 'react';

const Board = () => {
  const generateBoard = () => {
    const squares = [];
    const numSquares = 11;
    for (let row = 0; row < numSquares; ++row) {
      for (let col = 0; col < numSquares; ++col) {
        if (row === 0) {
          if (col === 0) {
            squares.push(<div className="square"> </div>);
          } else {
            squares.push(
              <div className="square">{String.fromCharCode(64 + col)}</div>
            );
          }
        } else {
          if (col === 0) {
            squares.push(<div className="square">{row}</div>);
          } else {
            squares.push(<div className="square">sq</div>);
          }
        }
      }
    }
    return squares;
  };

  return <div className="board">{generateBoard()}</div>;
};

export default Board;
