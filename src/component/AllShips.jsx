import React from 'react';
import Ship from './Ship';
import { Card, Button, CardDeck } from 'react-bootstrap';

const AllShips = (props) => {
  const shipOptions = [
    { name: 'carrier', length: 5 },
    { name: 'battleship', length: 4 },
    { name: 'cruiser', length: 3 },
    { name: 'submarine', length: 3 },
    { name: 'destroyer', length: 2 },
  ];

  const rotateSquare = (event) => {
    let parentElem = event.target.parentNode.childNodes[0];
    parentElem.childNodes[1].classList.toggle('rotate');
  };

  const placeShip = (event) => {
    event.preventDefault();
    let parentElem = event.target.parentNode.childNodes[0];
    let name = parentElem.childNodes[1].id;

    let classes = parentElem.childNodes[1].className;
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
    // console.log(`placeShip`, parentElem, {
    //   name: name,
    //   length: length,
    //   rotate: rotate,
    // });
    props.setCurrShip({ name: name, length: length, rotate: rotate });
  };

  return (
    <div className="text-center my-2">
      <div id="allships" className="allships">
        <CardDeck key={`cardDeck`}>
          {shipOptions.map((val, i) => {
            return (
              <Card
                key={`card${i}-${val.name}`}
                className="cardContainer m-2 border border-info"
              >
                <Card.Body key={`cardBody${i}-${val.name}`}>
                  <Card.Title key={`cardTitle${i}-${val.name}`}>
                    {val.name}
                  </Card.Title>
                  <Ship
                    key={`shipNum${i}-${val.name}`}
                    length={val.length}
                    name={val.name}
                    imgName={`/ship${val.length}.png`}
                  />
                </Card.Body>
                <Button
                  key={`rotateBtn${i}-${val.name}`}
                  className="btn btn-sm btn-info m-2 align-bottom"
                  onClick={(e) => rotateSquare(e)}
                >
                  Rotate
                </Button>
                <Button
                  key={`placeBtn${i}-${val.name}`}
                  onClick={(e) => placeShip(e)}
                  className={`place-carrier btn btn-sm btn-info m-2`}
                >
                  Ready to place
                </Button>
              </Card>
            );
          })}
        </CardDeck>
      </div>
    </div>
  );
};

export default AllShips;
