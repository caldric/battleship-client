import React from 'react';
import Ship from './Ship';

const AllShips = (props) => {
  const rotateSquare = (event) => {
    let parentElem = event.target.parentNode;
    parentElem.childNodes[0].classList.toggle('rotate');
  };

  const placeShip = (event) => {
    event.preventDefault();
    let parentElem = event.target.parentNode;
    let name = parentElem.childNodes[0].id;

    let classes = parentElem.childNodes[0].className;
    let rotate = classes.includes('rotate');

    let length = 0;
    switch (name) {
      case 'carrier':
        length = 5;
        break;
      case 'battleship':
        length = 4;
        break;
      case 'cruiser':
        length = 3;
        break;
      case 'submarine':
        length = 3;
        break;
      case 'destroyer':
        length = 2;
        break;
      default:
        break;
    }
    // console.log(`placeShip`, { name: name, length: length, rotate: rotate });
    props.setCurrShip({ name: name, length: length, rotate: rotate });
  };

  return (
    <div className="text-center">
      <div id="allships" className="allships">
        <div className="shipContainer border border-info rounded m-2">
          <Ship length={5} name={'carrier'} />
          <button className="btn btn-info m-2" onClick={(e) => rotateSquare(e)}>
            Rotate
          </button>
          <button
            className="btn btn-info m-2"
            onClick={(e) => placeShip(e)}
            className={`place-carrier btn btn-info m-2`}
          >
            Ready to place
          </button>
        </div>

        <div className="shipContainer border border-info rounded m-2">
          <Ship length={4} name={'battleship'} />
          <button className="btn btn-info m-2" onClick={(e) => rotateSquare(e)}>
            Rotate
          </button>
          <button
            className="btn btn-info m-2"
            onClick={(e) => placeShip(e)}
            className={`place-battleship btn btn-info m-2`}
          >
            Ready to place
          </button>
        </div>

        <div className="shipContainer border border-info rounded m-2">
          <Ship length={3} name={'cruiser'} />
          <button className="btn btn-info m-2" onClick={(e) => rotateSquare(e)}>
            Rotate
          </button>
          <button
            onClick={(e) => placeShip(e)}
            className={`place-cruiser btn btn-info m-2`}
          >
            Ready to place
          </button>
        </div>

        <div className="shipContainer border border-info rounded m-2">
          <Ship length={3} name={'submarine'} />
          <button className="btn btn-info m-2" onClick={(e) => rotateSquare(e)}>
            Rotate
          </button>
          <button
            onClick={(e) => placeShip(e)}
            className={`place-submarine btn btn-info m-2`}
          >
            Ready to place
          </button>
        </div>

        <div className="shipContainer border border-info rounded m-2">
          <Ship length={2} name={'destroyer'} />
          <button className="btn btn-info m-2" onClick={(e) => rotateSquare(e)}>
            Rotate
          </button>
          <button
            onClick={(e) => placeShip(e)}
            className={`place-destroyer btn btn-info m-2`}
          >
            Ready to place
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllShips;
