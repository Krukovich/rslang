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
    setCurrentIndex,
  } = props;

  const playSound = () => {
    playExampleSound(word.audio);
    insertWordImageSrc(word.image);
    setTranslateWord(word.wordTranslate);
    setCurrentWord(word.word);
    setCurrentIndex(index);
  }


  return (
    <button
      id={index}
      type="button"
      className="btn btn-primary w-100"
      disabled={word.done ? word.done : ''}
      onClick={() => playSound()}
    >
      <FontAwesomeIcon icon={faVolumeUp} color='white' />
      <span className="word_label">
        {word.word}
      </span><br />
      <span className="transcription_label">
        {word.transcription}
      </span>
    </button>
  );
}

export default Button;
