// Import
import React from 'react';

// Component
const Square = ({ content = '', divId = null, clickHandler = null }) => {
  return (
    <div className="square" id={divId} onClick={clickHandler}>
      {content}
    </div>
  );
};

// Component export
export default Square;
