import React from 'react';
import Square from './Square';
import Ship from './Ship';

const AllShips = () => {
  return (
    <div>
      <div id="allships" className="allships">
        <Ship length={5} name={'carrier'} />
        <Ship length={4} name={'battleship'} />
        <Ship length={3} name={'cruiser'} />
        <Ship length={3} name={'submarine'} />
        <Ship length={2} name={'destroyer'} />
      </div>
    </div>
  );
};

export default AllShips;
