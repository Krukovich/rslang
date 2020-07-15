import React from 'react';

const GroupButtons = ({ loadNewWords }) => {
  const labelCount = [1, 2, 3, 4, 5, 6];

  const inputs = labelCount.map((item, index) => {
    return (
      <label className="btn btn-primary" key={index}>
        <input type="radio" onClick={() => loadNewWords(index)} /> {item}
      </label>
    );
  });

  return (
    <div className="btn-group btn-group-toggle">
      {inputs}
    </div>
  );
}

export default GroupButtons;
