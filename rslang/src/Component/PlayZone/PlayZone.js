import React from 'react';
import { wordCards } from '../../constant';
import { imageRender, playExampleSound } from '../../service';
import './playZone.scss';

class PlayZone extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: wordCards[1],
      playStep: 0,
      agreeWord: wordCards[1][0].word,
      isNotAgree: true,
    }
  }

  incrementPlayStep = () => {
    const { playStep, cards } = this.state;
    if (playStep + 1 === cards.length) {
      return;
    }
    this.setState({
      playStep: playStep + 1,
      agreeWord: cards[playStep + 1].word,
      isNotAgree: true,
    });
  }

  decrementPlayStep = () => {
    const { playStep, cards } = this.state;
    this.setState({
      playStep: playStep - 1,
      agreeWord: cards[playStep - 1].word,
    });
  }

  renderPlayString = (data) => {
    const regexp = /<[^<>]+>/g;
    const word = data.word;
    const inputStyle = { width: `${ word.length }5px` };
    let tempString;

    tempString = data.textExample.replace(regexp, '');
    tempString = tempString.replace(data.word, '__');
    const tempCharArray = tempString.split(' ');

    const string = tempCharArray.map((char, index) => {
      if (char === '__' || char === '__.' ) {
        return(
          <span className="m-1" key={ index }>
            <input
              className="word-input"
              type="text"
              autoFocus
              maxLength={ word.length }
              style={ inputStyle }
            />
          </span>
        );
      } else {
        return(
          <span className="m-1" key={ index }>
            { char }
          </span>
        );
      }
    });
    return string;
  }

  handlerSubmit = (event) => {
    event.preventDefault();
    const input = event.target[0]; 
    const char = event.target[0].value;
    const { agreeWord, cards, playStep, isNotAgree } = this.state;

    if (!char) {
      return;
    } else {
      if (char === agreeWord) {
        playExampleSound(cards[playStep].audioExample);
        input.classList.add('agree');
        this.setState({ isNotAgree: false });
      } else {
        playExampleSound(cards[playStep].audio);
        input.value = agreeWord;
        input.classList.add('mistake');
        this.setState({ isNotAgree: true });
        setTimeout(() => {
          input.value = '';
          input.classList.remove('mistake');
        }, 2000);
      }
    }
  }

  render() {
    const { cards, playStep, isNotAgree } = this.state;
    const progressWidth = {
      width: `${ 100 / cards.length * playStep }%`,
    }

    return(
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-4 d-flex align-items-center d-flex justify-content-end">
            { !playStep ? '' : 
            <button
              type="button"
              className="btn btn-info"
              onClick={ () => this.decrementPlayStep() } 
            >
              Prev
            </button>
            }
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="card play-card">
              <img
                className="card-img-top"
                src={ imageRender(cards[playStep].image) }
                alt="image"
              />
              <div className="card-body">
                <form
                  onSubmit={ this.handlerSubmit }
                >
                  <div className="form-row">
                    <div className="col-12 mt-3">
                      <div className="row play-string">
                        { this.renderPlayString(cards[playStep]) }
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
                      <svg className="bi bi-volume-up-fill" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                        <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z"/>
                        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center d-flex justify-content-start">
            <button
                type="button"
                className="btn btn-info"
                disabled={ isNotAgree }
                onClick={ () => this.incrementPlayStep() } 
              >
              Next
            </button>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-2 text-center">
                <span className="badge badge-info">
                  { playStep }
                </span>
              </div>
              <div className="col-8">
                <div className="progress">
                  <div className="progress-bar bg-info" style={ progressWidth }></div>
                </div>
              </div>
              <div className="col-2 text-center">
                <span className="badge badge-info">
                  { cards.length }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayZone;
