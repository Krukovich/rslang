import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import {
  imageRender,
  playExampleSound,
  renderPlayString,
 } from '../../../service'; 

const Card = (props) => {
  const {
    cards,
    playStep,
    handlerSubmit,
    handlerChange,
    isNotAgree,
    showTranslateWord,
    showExplanationString,
    showWordImage,
    showWordsTranscription,
  } = props;

  return(
    <div className="card PlayCard">
      <img
        className="card-img-top"
        src={ showWordImage ? imageRender(cards[playStep].image) : '/images/playzone/english-language.jpg' }
        alt="image"
      />
      <div className="card-body">
        <form
          onSubmit={ handlerSubmit }
        >
          <div className="form-row">
            <div className="col-12 mt-3">
              <div className="row PlayString">
                { renderPlayString(cards[playStep], handlerChange) }
              </div>
            </div>
            <div className="col-12">
              <hr />
              { showTranslateWord && !isNotAgree ?
                cards[playStep].wordTranslate : '' 
              } 
            </div>
            <div className="col-12">
              <hr />
              <span>
                { showExplanationString && !isNotAgree ? cards[playStep].textExampleTranslate : '' }
              </span>
            </div>
          </div>
          <div className="col-12 text-right mt-3">
            <div className="row">
              <div className="col-6">
                { showWordsTranscription ? cards[playStep].transcription : '' }
              </div>
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Play example sound"
                  onClick={ () => playExampleSound(cards[playStep].audio) } 
                >
                  <FontAwesomeIcon icon={ faVolumeUp } />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Card;
