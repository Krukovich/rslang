import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { BTN_LABEL } from '../../../constant';

const Button = ({ decrementPlayStep, incrementPlayStep, label, type, isNotAgree }) => {
  const func = decrementPlayStep ? decrementPlayStep : incrementPlayStep;
  const flag = isNotAgree ? isNotAgree : '';

  return (
    <button
      type={type ? type : 'button'}
      className="btn btn-primary"
      disabled={flag}
      onClick={() => func()}
    >
      {label === BTN_LABEL.NEXT ? <FontAwesomeIcon icon={faAngleRight} /> : <FontAwesomeIcon icon={faAngleLeft} />}
    </button>
  );
}

export default Button;
