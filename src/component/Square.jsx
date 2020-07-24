import React from 'react';

const Square = ({ content, divId = null, clickHandler = null }) => {
  return (
    <div className="square" id={divId} onClick={clickHandler}>
      {content}
    </div>
  );
};

export default Square;
