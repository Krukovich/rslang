import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MiniBtn from '../MiniBtn/MiniBtn';

const BtnsBar = ({ items, showStats }) => {

<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return (<ButtonGroup size="lg">{elements}</ButtonGroup>)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
    
=======
<<<<<<< HEAD
  }
=======
=======
  return (<ButtonGroup size="lg">{elements}</ButtonGroup>);
=======
=======
>>>>>>> fix
  return (<ButtonGroup size="lg">{elements}</ButtonGroup>);
=======
  return (<ButtonGroup size="lg">{elements}</ButtonGroup>)
=======
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
>>>>>>> mini games BTNs
>>>>>>> mini games BTNs
<<<<<<< HEAD
>>>>>>> mini games BTNs
=======
=======
  return (<ButtonGroup vertical size="lg">{elements}</ButtonGroup>)
>>>>>>> fix
>>>>>>> fix
}

>>>>>>> feat: long stats from redux
>>>>>>> feat: long stats from redux
=======
  }
>>>>>>> fix after update
=======
  
=======
>>>>>>> fix
}

>>>>>>> mini games BTNs
export default BtnsBar;

