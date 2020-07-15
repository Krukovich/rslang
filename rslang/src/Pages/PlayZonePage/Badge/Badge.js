import React from 'react';

const Badge = ({ cards, playStep }) => {

  return (
    <span className="badge badge-secondary">
      {playStep >= 0 ? playStep : cards.length}
    </span>
  );
}

export default Badge;
