import React from 'react';

const RestartButton = ({ setPlayWords, resetScore }) => {
  return(
    <button
      className="btn btn-info w-100"
      type="button"
      onClick={ () => {
        setPlayWords();
        resetScore();
      } }
    >
      Рестарт
    </button>
  );
}

export default RestartButton;
