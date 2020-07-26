import React from 'react';
import Square from './Square';

const Ship = (props) => {
  const displaySquares = () => {
    let squareArr = [];
    for (let i = 0; i < props.length; i++) {
      squareArr.push(<Square />);
    }
    return squareArr;
  };

  return (
    <div id={`${props.name}`} className={`image ships ship${props.length}`}>
      <img src="/battleship-drawing.png" alt="" />
      {displaySquares().map((val, i) => {
        return val;
      })}
    </div>
  );
};

export default Ship;
