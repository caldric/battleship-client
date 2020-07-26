// Import
import React from 'react';

// Component
const Square = ({
  content = '',
  divId = null,
  clickHandler = null,
  className = '',
}) => {
  return (
    <div className={`square ${className}`} id={divId} onClick={clickHandler}>
      {content}
    </div>
  );
};

// Component export
export default Square;
