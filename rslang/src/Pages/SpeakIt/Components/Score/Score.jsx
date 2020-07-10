import React from 'react';

const Score = ({ score }) => {
  return(
    <span className="badge badge-primary">
      Счет: { score }
  </span>
  );
}

export default Score;
