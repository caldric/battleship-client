// Imports
import React from 'react';
import Square from './Square';

// Component
const Ship = (props) => {
  const displaySquares = () => {
    const squares = [];
    for (let i = 0; i < props.length; i++) {
      squares.push(<Square />);
    }
    return squares;
  };

  // Render
  return (
    <div id={`${props.name}`} className={`image ships ship${props.length}`}>
      <img src="./battleship-drawing.png" alt="" />
      {displaySquares().map((val, i) => {
        return val;
      })}
    </div>
  );
};

// Component export
export default Ship;
