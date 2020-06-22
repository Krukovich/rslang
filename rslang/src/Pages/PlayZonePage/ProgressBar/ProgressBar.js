import React from 'react';

const ProgressBar = ({ cards, playStep }) => {

  const progressWidth = {
    width: `${ 100 / cards.length * playStep }%`,
  }

  return(
    <div className="progress">
      <div className="progress-bar bg-primary" style={ progressWidth }></div>
    </div>
  );
}

export default ProgressBar;
