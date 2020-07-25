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

  const rotateSquare = (event) => {
    let parentElem = event.target.parentNode;
    parentElem.childNodes[0].classList.toggle('rotate');
  };

  return (
    <div>
      <div className="shipContainer">
        <div id={`${props.name}`} className={`image ships ship${props.length}`}>
          <img src="./battleship-drawing.png" alt="" />
          {displaySquares().map((val, i) => {
            return val;
          })}
        </div>
        <button onClick={(e) => rotateSquare(e)}>Rotate</button>
      </div>
    </div>
  );
};

export default Ship;
