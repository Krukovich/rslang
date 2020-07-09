import React, { useState } from 'react';
import { Button, Modal, ListGroup } from 'react-bootstrap';

const Stats = ({ words }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const list = words.map((item) => {
    return(
      <ListGroup.Item key={ item.id } >
        { (item.mistake) ? 
            <span className="badge badge-danger">
              { item.word }
            </span>
          : item.word
        }
        { (item.done) ? 
          <span className="badge badge-success">
            { item.word }
          </span>
          : item.word
        }
      </ListGroup.Item>
    );
  });

  return (
    <React.Fragment>
      <Button
        variant="info w-100"
        onClick={ handleShow }
      >
        Статистика
      </Button>

      <Modal show={ show } onHide={ handleClose } scrollable="true">
        <Modal.Header closeButton>
          <Modal.Title>Статистика</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            { list }
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ handleClose }>
            Close
          </Button>
          <Button variant="primary" onClick={ handleClose }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Stats;
