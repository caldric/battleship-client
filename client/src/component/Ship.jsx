// Imports
import React from 'react';
import Square from './Square';

// Component
const Ship = (props) => {
  const displaySquares = () => {
    const squares = [];
    for (let i = 0; i < props.length; i++) {
      squares.push(
        <Square
          key={`square${i} ${props.imgName}${props.name}${props.length}`}
        />
      );
    }
    return squares;
  };

  // Render
  return (
    <div
      key={`${props.name}${props.length}`}
      id={`${props.name}`}
      className={`shipImgDiv ships ship${props.length} align-bottom`}
    >
      <img
        key={`${props.name}${props.length} img`}
        className={`ship${props.length}`}
        src={props.imgName}
        alt=""
      />
      {displaySquares().map((val, i) => {
        return val;
      })}
    </div>
  );
};

// Component export
export default Ship;
