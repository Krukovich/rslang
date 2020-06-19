import React from 'react';

const Button = ({ decrementPlayStep, incrementPlayStep, label, type, isNotAgree }) => {
  const func = decrementPlayStep ? decrementPlayStep : incrementPlayStep;
  const flag = isNotAgree ? isNotAgree : '';
  
  return(
    <button
      type={ type ? type : 'button' }
      className="btn btn-primary"
      disabled={ flag }
      onClick={ () => func() } 
    >
      { label }
    </button>
  );
}

export default Button;
