import React from 'react';

const Level = ({ selectChange, level }) => {

  return(
    <div>
      <select
        value={ level }
        className="browser-default custom-select"
        onChange={ (event) => selectChange('level', +event.target.value) }
      >
        <option>Choose level</option>
        <option value="1">Level 1</option>
        <option value="2">Level 2</option>
        <option value="3">Level 3</option>
        <option value="4">Level 4</option>
        <option value="5">Level 5</option>
        <option value="6">Level 6</option>
      </select>
    </div>
  );
}

export default Level;
