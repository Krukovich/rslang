import React from 'react';

const GroupButtons = () => {
  const labelCount = [1, 2, 3, 4, 5, 6];
  
  const inputs = labelCount.map((item, index) => {
    return(
      <label className="btn btn-info" key={ index }>
        <input type="radio" /> { item }
      </label>
    );
  });

  return (
    <div className="btn-group btn-group-toggle">
      { inputs }
    </div>
  );
}

export default GroupButtons;
