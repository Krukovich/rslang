import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import { playExampleSound } from '../../../../service';

const Button = ({ word }) => {
  return (
    <button
      type="button"
      class="btn btn-outline-info w-100"
      onClick={ () => playExampleSound(word.audio) }
    >
      <FontAwesomeIcon icon={faVolumeUp} />
      <span class="word_label">
        { word.transcription }
      </span><br />
      <span class="transcription_label">
        { word.word }
      </span>
    </button>
  );
}

export default Button;
