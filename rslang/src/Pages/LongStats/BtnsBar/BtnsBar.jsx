import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MiniBtn from '../MiniBtn/MiniBtn';

const BtnsBar = ({ items, showStats }) => {

  const elements = items.map((item) => {
    const { id, label } = item;
    return (
      <div key={id}>
        <MiniBtn
          label={label}
          showStats={() => showStats(id)}
        />
      </div>
    )
  });
  return (<ButtonGroup size="lg">{elements}</ButtonGroup>)
<<<<<<< HEAD
  }
=======
}

>>>>>>> feat: long stats from redux
export default BtnsBar;
