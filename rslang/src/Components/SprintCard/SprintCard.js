import React from 'react';
import './SprintCard.scss';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const SprintCard = (props) => {
  return (
    <div className="Sprint-Card SprintCard card border-primary rounded mt-2 p-1 w-100">
      <div className="SprintCard-Body card-body">
        <div className="SprintCard-Design w-100"></div>
        <div className="SprintCard-Modifierbar w-100 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faBolt} />
          <div className="progress w-75 ml-1 mr-1">

            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: props.maxStreak * 25 + '%' }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>

          </div>
          <div className='SprintCard-ModifierCount'>{props.modifier}</div>
        </div>
        <h5 className="SprintCard-Title card-title text-center mt-4 mb-4">{props.eng}</h5>
        <h6 className="SprintCard-Subtitle card-subtitle mb-5 text-muted text-center">{props.rus}</h6>
        <div className="SprintCard-Footer card-footer p-3 d-flex justify-content-between">
          <Button ref={props.rightBtnRef} onClick={props.onclick} variant='success' className="SprintCard-Button_success">
            <span>Yes</span>
            <div className="SprintCard-Button_prompt">
              <div></div>
              <div></div>
            </div>
          </Button>
          <Button ref={props.wrongBtnRef} onClick={props.onclick} variant='danger' className="SprintCard-Button_wrong">
            <span>No</span>
            <div className="SprintCard-Button_prompt">
              <div></div>
              <div></div>
            </div>
          </Button>
        </div>
        <div className="SprintCard-Healthbar d-flex justify-content-center align-items-center mt-2">
          <FontAwesomeIcon icon={faSmile} />
          <div className="progress w-75 ml-1 mr-1">

            <div className="progress-bar bg-danger" style={{ width: props.mistakeCount * 33 + '%' }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>

          </div>
          <FontAwesomeIcon icon={faSkull} />
        </div>
      </div>
    </div>
  )
}

export default SprintCard