import React from 'react';

import { playExampleSound } from '../../../service';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const PlayBtn = ({ src }) => {
  return (
    <button
      type="button"
      className="btn mr-2"
      onClick={ () => playExampleSound(src) }
    >
      <FontAwesomeIcon icon={faPlayCircle} />
    </button>
  )
}

export default PlayBtn
