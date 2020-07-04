import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import { playExampleSound } from '../../../../service';

const Button = (props) => {
  const {
    word,
    insertWordImageSrc,
    setTranslateWord,
    setCurrentWord,
    index,
    currentIndex,
    isDisable,
    setCurrentIndex,
    setIsDisable,
  } = props;

  const playSound = () => {
    playExampleSound(word.audio);
    insertWordImageSrc(word.image);
    setTranslateWord(word.wordTranslate);
    setCurrentWord(word.word);
    setCurrentIndex(index);
  }

  const setDisabled = () => {
    setIsDisable();
    if (currentIndex === index) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <button
      id={ index }
      disabled={ isDisable ? setDisabled() : '' }
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
