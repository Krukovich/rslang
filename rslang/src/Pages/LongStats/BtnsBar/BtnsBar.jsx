import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MiniBtn from '../MiniBtn/MiniBtn';

const BtnsBar = ({ items, showStats }) => {
<<<<<<< HEAD
=======

>>>>>>> 98637c0... fix after update
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
<<<<<<< HEAD
  return (<ButtonGroup size="lg">{elements}</ButtonGroup>);
=======
  return (<ButtonGroup size="lg">{elements}</ButtonGroup>)
>>>>>>> 98637c0... fix after update
}

export default BtnsBar;
