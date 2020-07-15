import React from 'react';
import { connect } from 'react-redux';

import { playExampleSound, putUserWordsById, checkDeleteWords } from '../../service';
import { BTN_LABEL } from '../../constant';
import { setDifficultWords, setDeleteWords, setAppStats, setWordCards } from '../../Store/PlayZonePage/actions';
import ProgressBar from './ProgressBar/ProgressBar';
import Card from './Card/Card';
import Badge from './Badge/Badge';
import Button from './Button/Button';
import VerticalMenu from './VerticalMenu/VerticalMenu';
import ShortStats from '../../Components/ShortStats/ShortStats.jsx';
import { Translation } from 'react-i18next';

import './playZonePage.scss';

const mapStateToProps = (store) => {
  const {
    dayLearningWords,
    difficultWords,
    newWords,
  } = store.playZone;

  const {
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
    newWords: newWords,
    showWordImage: showWordImage,
    showWordTranscription: showWordTranscription,
    playExampleSound: playExampleSound,
    showExplanationString: showExplanationString,
    showTranslateWord: showTranslateWord,
    showBtnDifficultWord: showBtnDifficultWord,
    showBtnShowAgreeAnswer: showBtnShowAgreeAnswer,
    showBtnDeleteWord: showBtnDeleteWord,
    difficultWords: difficultWords,
    dayLearningWords: dayLearningWords.length ? dayLearningWords : JSON.parse(localStorage.startWords),
    cards: store.playZone.cards,
  }
}

const mapActionToProps = {
  setDeleteWords,
  setWordCards,
  setDifficultWords,
  setAppStats,
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
      isFinish: false,
      newWords: props.newWords,
    }
    this.difficultWordId = '';
    this.rightAnswerArray = [];
    this.agreeCountAnswer = 0;
    this.agreeRow = 0;
    this.agreeStep = 0;
  }

  incrementPlayStep = () => {
    const { playStep, cards } = this.state;
    if (playStep + 1 === cards.length) {
      this.setState({ isFinish: true });
      this.saveStats();
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

  saveStats = () => {
    const dateTime = Date.now();
    const successCount = this.state.cards.length;
    this.props.setAppStats({ successCount, dateTime });
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
    putUserWordsById(card[playStep].id, null, true, null);
    this.props.setDeleteWords(card);
  }

  insertCardToDifficult = () => {
    const { cards, playStep } = this.state;
    if (this.difficultWordId === cards[playStep].id) {
      return;
    } else {
      this.difficultWordId = cards[playStep].id;
      putUserWordsById(cards[playStep].id, true, null, null);
      if (!checkDeleteWords(this.props.difficultWords, cards[playStep].word)) {
        this.props.setDifficultWords([cards[playStep]]);
      }
    }
  }

  handlerSubmit = (event) => {
    event.preventDefault();
    const input = event.target[0];
    const word = event.target[0].value;
    const { agreeWord, cards, playStep } = this.state;

    if (!word) {
      return;
    } else {
      if (word === agreeWord) {
        if (this.props.playExampleSound) {
          playExampleSound(cards[playStep].audioExample);
        }
        input.classList.remove('PlayCard_Mistake');
        input.classList.add('PlayCard_Agree');
        this.setState({ isNotAgree: false });
        if (!this.rightAnswerArray.includes(word)) {
          this.agreeCountAnswer += 1;
          this.agreeStep += 1;
          this.incrementAgreeRow();
          this.rightAnswerArray.push(word);
        }
      } else {
        if (this.props.playExampleSound) {
          playExampleSound(cards[playStep].audio);
        }
        this.agreeStep = 0;
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

  incrementAgreeRow = () => {
    if (this.agreeStep > this.agreeRow) {
      this.agreeRow += 1;
    }
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
        if (!this.rightAnswerArray.includes(inputValue)) {
          this.agreeCountAnswer += 1;
          this.agreeStep += 1;
          this.incrementAgreeRow();
          this.rightAnswerArray.push(inputValue);
        }
      } else {
        if (this.props.playExampleSound) {
          playExampleSound(cards[playStep].audio);
        }
        this.agreeStep = 0;
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
      isFinish,
    } = this.state;

    return (
      <React.Fragment>
        {(!isFinish) ?
          <div className="Playzone container">
            <div className="row mt-5">
              <div className="Playzone-Playborad col-12 d-flex justify-content-center mt-5">
                <Card
                  input={this.input}
                  isNotAgree={isNotAgree}
                  cards={cards}
                  playStep={playStep}
                  showWordImage={this.props.showWordImage}
                  showTranslateWord={this.props.showTranslateWord}
                  showExplanationString={this.props.showExplanationString}
                  showWordTranscription={this.props.showWordTranscription}
                  handlerChange={this.handlerInputChange}
                  handlerSubmit={this.handlerSubmit}
                />
                <VerticalMenu
                  showAnswer={this.showAnswer}
                  insertCardToDifficult={this.insertCardToDifficult}
                  deleteCard={this.deleteCard}
                  showBtnDeleteWord={this.props.showBtnDeleteWord}
                  showBtnDifficultWord={this.props.showBtnDifficultWord}
                  showBtnShowAgreeAnswer={this.props.showBtnShowAgreeAnswer}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center mt-5">
                <div className="btn-group" role="group" aria-label="Basic example">
                  <Button decrementPlayStep={this.decrementPlayStep} label={BTN_LABEL.PREV} isNotAgree={!playStep ? true : false} />
                  <button
                    className="btn btn-primary"
                    onClick={this.changeAnswer}
                  >
                    {<Translation>
                      {
                        (t) => <>{t('playzone.4')}</>
                      }
                    </Translation>}
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
                </div>
              </div>
            </div>
          </div>
          :
          <div className="row mt-5">
            <ShortStats
              total={this.state.cards.length}
              right={(this.agreeCountAnswer / this.state.cards.length) * 100}
              newWords={this.state.newWords}
              rightInArrow={this.agreeRow}
            />
          </div>
        }
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(PlayZonePage);
