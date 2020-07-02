import React from 'react';
import { connect } from 'react-redux';

import { playExampleSound } from '../../service';
import { BTN_LABEL } from '../../constant';
import { setWordCards } from '../../Store/PlayZonePage/actions';
import { setDifficultWords, setDeleteWords } from '../../Store/Actions';
import ProgressBar from './ProgressBar/ProgressBar';
import Card from './Card/Card';
import Badge from './Badge/Badge';
import Button from './Button/Button';
import VerticalMenu from './VerticalMenu/VerticalMenu';
import ShortStats from '../../Components/ShortStats/ShortStats';

import './playZonePage.scss';

const mapStateToProps = (store) => {
  const {
    dayLearningWords,
    difficultWords,
    showBtnDeleteWord,
    showBtnDifficultWord,
    showBtnShowAgreeAnswer,
    showTranslateWord,
    showExplanationString,
    playExampleSound,
    showWordTranscription,
    showWordImage,
  } = store.appSettings;

  return {
    showWordImage: showWordImage,
    showWordTranscription: showWordTranscription,
    playExampleSound: playExampleSound,
    showExplanationString: showExplanationString,
    showTranslateWord: showTranslateWord,
    showBtnDifficultWord: showBtnDifficultWord,
    showBtnShowAgreeAnswer: showBtnShowAgreeAnswer,
    showBtnDeleteWord: showBtnDeleteWord,
    difficultWords: difficultWords,
    dayLearningWords: dayLearningWords,
    cards: store.playZone.cards,
  }
}

const mapActionToProps = {
  setDeleteWords,
  setWordCards,
  setDifficultWords,
}

class PlayZonePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.dayLearningWords,
      playStep: 0,
      agreeWord: props.dayLearningWords[0].word,
      isNotAgree: true,
      inputValue: '',
}
    this.difficultWordId = '';
    this.agreeCountAnswer = 0;
  }

  incrementPlayStep = () => {
    const { playStep, cards } = this.state;
    if (playStep + 1 === cards.length) {
      this.setState({ isFinish: true });
      return;
    } else {
      this.setState({
        playStep: playStep + 1,
        agreeWord: cards[playStep + 1].word,
        isNotAgree: true,
        inputValue: '',
      });
      this.input.value = '';
    }
  }

  decrementPlayStep = () => {
    const { playStep, cards } = this.state;
    this.setState({
      playStep: playStep - 1,
      agreeWord: cards[playStep - 1].word,
      inputValue: '',
    });
  }

  deleteCard = () => {
    const { cards, playStep } = this.state;
    if (cards.length === 1) {
      return;
    }
    const card = cards.splice(playStep, 1);
    this.setState({
      cards: cards,
      agreeWord: cards[playStep].word,
    });
    this.props.setDeleteWords(card);
  }

  insertCardToDifficult = () => {
    const { cards, playStep } = this.state;
    if (this.difficultWordId === cards[playStep].id) {
      return;
    } else {
      this.difficultWordId = cards[playStep].id;
      this.props.setDifficultWords(cards[playStep]);
    }
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
        if (this.props.playExampleSound) {
          playExampleSound(cards[playStep].audioExample);
        }
        input.classList.remove('PlayCard_Mistake');
        input.classList.add('PlayCard_Agree');
        this.setState({ isNotAgree: false });
        this.agreeCountAnswer += 1;
      } else {
        if (this.props.playExampleSound) {
          playExampleSound(cards[playStep].audio);
        }
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

  showAnswer = () => {
    const { cards, playStep } = this.state;
    this.input = document.querySelector('.WordInput');
    this.input.value = cards[playStep].word;
    this.setState({ isNotAgree: false });
  }

  handlerInputChange = (event) => {
    this.input = event.target;
    this.setState({ inputValue: event.target.value });
  }

  changeAnswer = () => {
    const {
      agreeWord,
      inputValue,
      cards,
      playStep
    } = this.state;

    if (!inputValue) {
      return;
    } else {
      if (agreeWord === inputValue) {
        if (this.props.playExampleSound) {
          playExampleSound(cards[playStep].audioExample);
        }
        this.input.classList.remove('PlayCard_Mistake');
        this.input.classList.add('PlayCard_Agree');
        this.setState({ isNotAgree: false });
        this.agreeCountAnswer += 1;
      } else {
        if (this.props.playExampleSound) {
          playExampleSound(cards[playStep].audio);
        }
        this.input.value = agreeWord;
        this.input.classList.remove('PlayCard_Agree');
        this.input.classList.add('PlayCard_Mistake');
        this.setState({ isNotAgree: true });
        setTimeout(() => {
          this.input.value = '';
          this.input.classList.remove('PlayCard_Mistake');
        }, 2000);
      }
    }
  }

  render() {
    const {
      cards,
      playStep,
      isNotAgree,
      isFinish
    } = this.state;

<<<<<<< HEAD
    return(
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center mt-5">
            { !isFinish ? 
              <div>
                <Card
                  input={ this.input }
                  isNotAgree={ isNotAgree }
                  cards={ cards }
                  playStep={ playStep }
                  showTranslateWord={ this.props.showTranslateWord }
                  showExplanationString={ this.props.showExplanationString }
                  showWordsTranscription={ this.props.showWordsTranscription }
                  showWordImage={ this.props.showWordImage }
                  handlerChange={ this.handlerInputChange }
                  handlerSubmit={ this.handlerSubmit }
                />
                <VerticalMenu
                  showAnswer={ this.showAnswer }
                  insertCardToDifficult={ this.insertCardToDifficult }
                  deleteCard={ this.deleteCard }
                  showBtnDeleteWord={ this.props.showBtnDeleteWord }
                  showBtnDifficultWord={ this.props.showBtnDifficultWord }
                  showBtnShowAgreeAnswer={ this.props.showBtnShowAgreeAnswer }
                />
              </div> 
              : 
              <ShortStats
                total={ cards.length }
                right={ (this.agreeCountAnswer / cards.length) * 100 }
                newWords={ 5 }
                rightInARow={ 17 }
=======
    return (
      <>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center mt-5">
              <Card
                input={ this.input }
                isNotAgree={ isNotAgree }
                cards={ cards }
                playStep={ playStep }
                showWordImage={ this.props.showWordImage }
                showTranslateWord={ this.props.showTranslateWord }
                showExplanationString={ this.props.showExplanationString }
                showWordTranscription={ this.props.showWordTranscription }
                handlerChange={ this.handlerInputChange }
                handlerSubmit={ this.handlerSubmit }
              />
              <VerticalMenu
                showAnswer={this.showAnswer}
                insertCardToDifficult={this.insertCardToDifficult}
                deleteCard={this.deleteCard}
                showBtnDeleteWord={this.props.showBtnDeleteWord}
                showBtnDifficultWord={this.props.showBtnDifficultWord}
                showBtnShowAgreeAnswer={this.props.showBtnShowAgreeAnswer}
>>>>>>> develop
              />
            } 
          </div>
<<<<<<< HEAD
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-5">
            <div className="btn-group" role="group" aria-label="Basic example">
              <Button decrementPlayStep={ this.decrementPlayStep } label={ BTN_LABEL.PREV } isNotAgree={ !playStep ? true : false }/>
              <button
                className="btn btn-primary"
                onClick={ this.changeAnswer }
              >
                Проверить
              </button>
              <Button incrementPlayStep={ this.incrementPlayStep } label={ BTN_LABEL.NEXT } isNotAgree={ isNotAgree } />
            </div>
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
=======
          <div className="row">
            <div className="col-12 d-flex justify-content-center mt-5">
              <div className="btn-group" role="group" aria-label="Basic example">
                <Button decrementPlayStep={this.decrementPlayStep} label={BTN_LABEL.PREV} isNotAgree={!playStep ? true : false} />
                <button
                  className="btn btn-primary"
                  onClick={this.changeAnswer}
                >
                  Проверить
                </button>
                <Button incrementPlayStep={this.incrementPlayStep} label={BTN_LABEL.NEXT} isNotAgree={isNotAgree} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-2 text-center">
                  <Badge playStep={playStep} />
                </div>
                <div className="col-8">
                  <ProgressBar playStep={playStep} cards={cards} />
                </div>
                <div className="col-2 text-center">
                  <Badge cards={cards} />
                </div>
>>>>>>> develop
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(PlayZonePage);
