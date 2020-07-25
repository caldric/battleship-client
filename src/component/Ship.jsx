import React from 'react';
import Square from './Square';

const AllShips = () => {
  return (
    <div>
      <div id="allships" className="allships">
        <div id="carrier" className="image ships ship5">
          <img src="./battleship-drawing.png" alt="" />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div id="battleship" className="image ships ship4">
          <img src="./battleship-drawing.png" alt="" />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div id="cruiser" className="image ships ship3">
          <img src="./battleship-drawing.png" alt="" />
          <Square />
          <Square />
          <Square />
        </div>
        <div id="submarine" className="image ships ship3">
          <img src="./battleship-drawing.png" alt="" />
          <Square />
          <Square />
          <Square />
        </div>
        <div id="destroyer" className="image ships ship2">
          <img src="./battleship-drawing.png" alt="" />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  );
};

export default AllShips;
