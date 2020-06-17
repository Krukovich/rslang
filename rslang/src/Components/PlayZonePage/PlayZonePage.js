import React from 'react';
import { playExampleSound } from '../../service';
import { BTN_LABEL } from '../../constant';
import ProgressBar from './ProgressBar/ProgressBar';
import Card from './Card/Card';
import Badge from './Badge/Badge';
import Button from './Button/Button';
import './playZonePage.scss';

class PlayZonePage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cards: props.cards,
      isNotAgree: false,
      playStep: 0,
      agreeWord: props.cards[0].word,
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
        input.classList.remove('PlayCard_Mistake');
        input.classList.add('PlayCard_Agree');
        this.setState({ isNotAgree: false });
      } else {
        playExampleSound(cards[playStep].audio);
        input.value = agreeWord;
        input.classList.remove('PlayCard_Agree');
        input.classList.add('PlayCard_Mistake');
        this.setState({ isNotAgree: true });
        setTimeout(() => {
          input.value = '';
          input.classList.remove('PlayCard_Mistake');
        }, 2000);
      }
    }
  }

  render() {
    const { cards, playStep, isNotAgree } = this.state;

    return(
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-2 col-lg-4 d-flex align-items-center d-flex justify-content-end mt-5 mb-5">
            { !playStep ? '' : <Button decrementPlayStep={ this.decrementPlayStep } label={ BTN_LABEL.PREV } /> }
          </div>
          <div className="col-12 col-md-8 col-lg-4 d-flex justify-content-center">
            <Card
              cards={ cards }
              playStep={ playStep }
              handlerSubmit={ this.handlerSubmit }
            />
          </div>
          <div className="col-12 col-md-2 col-lg-4 d-flex align-items-center d-flex justify-content-start mt-5 mb-5">
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
