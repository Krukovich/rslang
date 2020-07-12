import React from 'react';

const Score = ({ score }) => {
  return(
    <span className="badge badge-secondary">
      Счет: { score }
  </span>
  );
}

export default Score;
