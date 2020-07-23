import React from 'react';

const Board = () => {
  return (
    <div className="board">
      {/* Output 100 squares */}
      {Array(100).fill(<div className="square">square</div>)}
    </div>
  );
};

export default Board;
