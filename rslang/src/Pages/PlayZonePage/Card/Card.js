import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import {
  imageRender,
  playExampleSound,
  renderPlayString,
 } from '../../../service'; 

const Card = ({ cards, playStep, handlerSubmit }) => {
  return(
    <div className="card PlayCard">
      <img
        className="card-img-top"
        src={ imageRender(cards[playStep].image) }
        alt="image"
      />
      <div className="card-body">
        <form
          onSubmit={ handlerSubmit }
        >
          <div className="form-row">
            <div className="col-12 mt-3">
              <div className="row PlayString">
                { renderPlayString(cards[playStep]) }
              </div>
            </div>
            <div className="col-12">
              <hr />
              <span>
                { cards[playStep].textExampleTranslate }
              </span>
            </div>
          </div>
          <div className="col-12 text-right mt-3">
            <button
              type="button"
              className="btn btn-outline-info btn-sm"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Play example sound"
              onClick={ () => playExampleSound(cards[playStep].audio) } 
            >
              <FontAwesomeIcon icon={ faVolumeUp } />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Card;
