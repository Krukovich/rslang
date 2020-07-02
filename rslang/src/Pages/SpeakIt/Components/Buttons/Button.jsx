import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import { playExampleSound } from '../../../../service';

const Button = ({ word, insertWordImageSrc, setTranslateWord, setCurrentWord }) => {
  const playSound = () => {
    playExampleSound(word.audio);
    insertWordImageSrc(word.image);
    setTranslateWord(word.wordTranslate);
    setCurrentWord(word.word);
  }

  return (
    <button
      type="button"
      className="btn btn-outline-info w-100"
      onClick={ () => playSound() }
    >
      <FontAwesomeIcon icon={ faVolumeUp } />
      <span className="word_label">
        { word.word }
      </span><br />
      <span className="transcription_label">
        { word.transcription }
      </span>
    </button>
  );
}

export default Button;
