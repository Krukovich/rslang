import React from 'react';

const Badge = ({ cards, playStep }) => {

  return(
    <span className="badge badge-info">
      { playStep >= 0 ? playStep : cards.length }
    </span>
  );
}

export default Badge;
