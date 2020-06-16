import React from 'react';

const Button = ({ decrementPlayStep, incrementPlayStep, label, isNotAgree }) => {
  const func = decrementPlayStep ? decrementPlayStep : incrementPlayStep;
  const flag = isNotAgree ? isNotAgree : '';
  
  return(
    <button
      type="button"
      className="btn btn-info"
      disabled={ flag }
      onClick={ () => func() } 
    >
      { label }
    </button>
  );
}

export default Button;
