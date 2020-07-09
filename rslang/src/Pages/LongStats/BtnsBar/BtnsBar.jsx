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
<<<<<<< HEAD
  return (<ButtonGroup size="lg">{elements}</ButtonGroup>)
  }
=======

  return (<ButtonGroup size="lg">{elements}</ButtonGroup>);
}

>>>>>>> 06f669102a93e110fb2b1764cbdc9f617968622f
export default BtnsBar;
