import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MiniBtn from '../MiniBtn/MiniBtn';

const BtnsBar = ({ items, showStats }) => {

<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> mini games BTNs
=======
>>>>>>> fix
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
>>>>>>> mini games BTNs
export default BtnsBar;

