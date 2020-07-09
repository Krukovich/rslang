import React, { useState } from 'react';
import { Button, Modal, ListGroup } from 'react-bootstrap';

import { fetchAPI } from '../../../../Components/Tools/fetchAPI';

const Stats = ({ words, score }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveStats = () => {
    const speakIt = {
      speakIt: {
        date: new Date().getMilliseconds(),
        score: score,
      }
    }
    fetchAPI("users-set-statistics", speakIt);
    handleClose();
  }

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
          <Modal.Title>
            Статистика
            <span className="ml-3">
              Ваш результат { score }
            </span>
          </Modal.Title>
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
          <Button variant="primary" onClick={ () => saveStats() }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Stats;
