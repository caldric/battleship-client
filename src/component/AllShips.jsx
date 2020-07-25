import React from 'react';
import Square from './Square';
import Ship from './Ship';

const AllShips = () => {
  const rotateSquare = (event) => {
    let parentElem = event.target.parentNode;
    parentElem.childNodes[0].classList.toggle('rotate');
  };

  return (
    <div>
      <div id="allships" className="allships">
        <div className="shipContainer">
          <Ship length={5} name={'carrier'} />
          <button onClick={(e) => rotateSquare(e)}>Rotate</button>
          <label htmlFor="shipRadio">Select for placement</label>
          <input type="radio" name="shipRadio" className={`radio-carrier`} />
        </div>

        <div className="shipContainer">
          <Ship length={4} name={'battleship'} />
          <button onClick={(e) => rotateSquare(e)}>Rotate</button>
          <label htmlFor="shipRadio">Select for placement</label>
          <input type="radio" name="shipRadio" className={`radio-battleship`} />
        </div>

        <div className="shipContainer">
          <Ship length={3} name={'cruiser'} />
          <button onClick={(e) => rotateSquare(e)}>Rotate</button>
          <label htmlFor="shipRadio">Select for placement</label>
          <input type="radio" name="shipRadio" className={`radio-cruiser`} />
        </div>

        <div className="shipContainer">
          <Ship length={3} name={'submarine'} />
          <button onClick={(e) => rotateSquare(e)}>Rotate</button>
          <label htmlFor="shipRadio">Select for placement</label>
          <input type="radio" name="shipRadio" className={`radio-submarine`} />
        </div>

        <div className="shipContainer">
          <Ship length={2} name={'destroyer'} />
          <button onClick={(e) => rotateSquare(e)}>Rotate</button>
          <label htmlFor="shipRadio">Select for placement</label>
          <input type="radio" name="shipRadio" className={`radio-destroyer`} />
        </div>
      </div>
    </div>
  );
};

export default AllShips;
