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
    <div className="text-center my-2">
      <div id="allships" className="allships">
        <div className="shipContainer border border-info rounded m-2 align-bottom">
          <Ship length={5} name={'carrier'} imgName={'/5.png'} />
          <button
            className="btn btn-sm btn-info m-2 align-bottom"
            onClick={(e) => rotateSquare(e)}
          >
            Rotate
          </button>
          <button
            onClick={(e) => placeShip(e)}
            className={`place-carrier btn btn-sm btn-info m-2`}
          >
            Ready to place
          </button>
        </div>

        <div className="shipContainer border border-info rounded m-2 align-bottom">
          <Ship length={4} name={'battleship'} imgName={'/3.png'} />
          <button
            className="btn btn-sm btn-info m-2 align-bottom"
            onClick={(e) => rotateSquare(e)}
          >
            Rotate
          </button>
          <button
            onClick={(e) => placeShip(e)}
            className={`place-battleship btn btn-sm btn-info m-2 align-bottom`}
          >
            Ready to place
          </button>
        </div>

        <div className="shipContainer border border-info rounded m-2 align-bottom">
          <Ship length={3} name={'cruiser'} imgName={'/2.png'} />
          <button
            className="btn btn-sm btn-info m-2 align-bottom"
            onClick={(e) => rotateSquare(e)}
          >
            Rotate
          </button>
          <button
            onClick={(e) => placeShip(e)}
            className={`place-cruiser btn btn-sm btn-info m-2 align-bottom`}
          >
            Ready to place
          </button>
        </div>

        <div className="shipContainer border border-info rounded m-2 align-bottom">
          <Ship length={3} name={'submarine'} imgName={'/2.png'} />
          <button
            className="btn btn-sm btn-info m-2 align-bottom"
            onClick={(e) => rotateSquare(e)}
          >
            Rotate
          </button>
          <button
            onClick={(e) => placeShip(e)}
            className={`place-submarine btn btn-sm btn-info m-2 align-bottom`}
          >
            Ready to place
          </button>
        </div>

        <div className="shipContainer border border-info rounded m-2 align-bottom">
          <Ship length={2} name={'destroyer'} imgName={'/2.png'} />
          <button
            className="btn btn-sm btn-info m-2 align-bottom"
            onClick={(e) => rotateSquare(e)}
          >
            Rotate
          </button>
          <button
            onClick={(e) => placeShip(e)}
            className={`place-destroyer btn btn-sm btn-info m-2 align-bottom`}
          >
            Ready to place
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllShips;
