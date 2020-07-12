import React, { useState } from 'react';
import { Button, Modal, ListGroup } from 'react-bootstrap';

const Stats = ({ words, score, setSpeakItStats }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveStats = () => {
    const dateTime = Date.now();
    const successCount = score;
    setSpeakItStats({ successCount, dateTime });
    handleClose();
  }

  const list = words.map((item) => {
    return (
      <ListGroup.Item key={item.id} >
        {(item.mistake) ?
          <span className="badge badge-danger">
            {item.word}
          </span>
          : item.word
        }
        {(item.done) ?
          <span className="badge badge-success">
            {item.word}
          </span>
          : item.word
        }
      </ListGroup.Item>
    );
  });

  return (
    <React.Fragment>
      <Button
        className={'btn-primary w-100'}
        // variant=""
        onClick={handleShow}
      >
        Статистика
      </Button>

      <Modal show={show} onHide={handleClose} scrollable="true">
        <Modal.Header closeButton>
          <Modal.Title>
            Статистика
            <span className="ml-3">
              Ваш результат {score}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {list}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="secondary" onClick={() => saveStats()}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Stats;
