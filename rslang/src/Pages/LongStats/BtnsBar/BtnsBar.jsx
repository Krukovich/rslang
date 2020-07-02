import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MiniBtn from '../MiniBtn/MiniBtn';

const BtnsBar = ({ items, showStats }) => {

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fix
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
<<<<<<< HEAD
  return (<ButtonGroup size="lg">{elements}</ButtonGroup>)
<<<<<<< HEAD
  }
=======
=======
=======
>>>>>>> mini games BTNs
    const elements = items.map((item) => {
        const { id, label } = item;
        return (
            <div key={id}>
                <MiniBtn  {...label}
                    showStats={() => showStats(id)} />
                <span>{label}</span>
            </div>
        )
    });
    return (<ButtonGroup vertical size="lg">{elements}</ButtonGroup>)
<<<<<<< HEAD
>>>>>>> mini games BTNs
=======
  return (<ButtonGroup vertical size="lg">{elements}</ButtonGroup>)
>>>>>>> fix
}

>>>>>>> fix
=======
}

>>>>>>> mini games BTNs
export default BtnsBar;

