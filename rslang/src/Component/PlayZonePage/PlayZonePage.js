import React from 'react';
import { wordCards } from '../../constant';
import { playExampleSound } from '../../service';
import { BTN_LABEL } from '../../constant';
import ProgressBar from './ProgressBar/ProgressBar';
import Card from './Card/Card';
import Badge from './Badge/Badge';
import Button from './Button/Button';
import './playZonePage.scss';

class PlayZonePage extends React.Component {
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

  handlerSubmit = (event) => {
    event.preventDefault();
    const input = event.target[0]; 
    const char = event.target[0].value;
    const { agreeWord, cards, playStep } = this.state;

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

    return(
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-4 d-flex align-items-center d-flex justify-content-end">
            { !playStep ? '' : <Button decrementPlayStep={ this.decrementPlayStep } label={ BTN_LABEL.PREV } /> }
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <Card
              cards={ cards }
              playStep={ playStep }
              handlerSubmit={ this.handlerSubmit }
            />
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center d-flex justify-content-start">
            <Button
              incrementPlayStep={ this.incrementPlayStep }
              label={ BTN_LABEL.NEXT }
              isNotAgree={ isNotAgree }
            />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-2 text-center">
                <Badge playStep={ playStep } />
              </div>
              <div className="col-8">
                <ProgressBar playStep={ playStep } cards={ cards } />
              </div>
              <div className="col-2 text-center">
                <Badge cards={ cards } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayZonePage;
