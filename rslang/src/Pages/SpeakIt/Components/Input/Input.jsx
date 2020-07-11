import React from 'react';

const Input = ({ value }) => {
  return(
    <input 
      type="text"
      className="form-control"
      value={ value }
    />
  );
}

export default Input;
