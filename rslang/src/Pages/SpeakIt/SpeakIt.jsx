import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';
 
import { imageRender, playAudio, getWords } from '../../service';
import { SOUND, POINT, MAX_WORDS_LENGTH, SPEAK_LANGUAGE } from '../../constant';
import Score from './Components/Score/Score.jsx';
import Button from './Components/Buttons/Button.jsx';
import GroupButtons from './Components/GroupButtons/GroupButtons.jsx';
import RestartButton from './Components/Buttons/RestartButton.jsx';
import PlayGame from './Components/Buttons/PlayGame.jsx';
import Input from './Components/Input/Input.jsx';
import SpeakItEnd from './SpeakItEnd.jsx';
import Stats from './Components/Stats/Stats.jsx';

const mapStateToProps = (state) => {
  return {
    level: state.appSettings.level,
    words: state.appSettings.dayLearningWords,
  }
}

class SpeakIt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      currentIndex: '',
      currentWord: '',
      inputValue: '',
      imageSrc: 'images/enjoy_small.png',
      translate: 'Перевод',
      words: [],
      step: 0,
      isFinish: false,
    }
  }

  componentDidMount() {
    this.setPlayWords();
  }

  setPlayWords = async () => {
    const { level } = this.props;
    const words = this.props.words || JSON.parse(localStorage.startWords);
    if (words.length < MAX_WORDS_LENGTH || words === undefined) {
      const newPlayWords = await getWords(level, MAX_WORDS_LENGTH);
      this.setState({ words: newPlayWords });
    } else {
      this.setState({ words: words.splice(0, MAX_WORDS_LENGTH) });
    }
  }

  loadNewWords = async (level) => {
    const newWords = await getWords(level, MAX_WORDS_LENGTH);
    this.setState({ words: newWords });
  }

  incrementStep = () => {
    this.setState({ step: this.state.step += 1 });
    if (this.state.step === MAX_WORDS_LENGTH) {
      this.setState({ isFinish: !this.state.isFinish });
    }
  }

  setCurrentIndex = (index) => {
    this.setState({ currentIndex: index })
  }

  setCurrentWord = (word) => {
    this.setState({ currentWord: word });
  }

  setImageSrc = (src) => {
    this.setState({ imageSrc: imageRender(src) });
  }
  
  setTranslateWord = (word) => {
    this.setState({ translate: word });
  }

  setWordDone = (index) => {
    const words = [...this.state.words];
    const word = { ...words[index], done: true };
    words[index] = word;
    this.setState({ words });
  }

  incrementScore = () => {
    this.setState({ score: this.state.score += POINT });
  }

  decrementScore = () => {
    this.setState({ score: this.state.score <= POINT ? 0 : this.state.score -= POINT });
  }

  resetScore = () => {
    this.setState({ score: 0 });
  }

  renderWordButton = () => {
    const { words } = this.state;

    return words.map((item, index) => {
      return (
        <div className="col-6 col-sm-6 col-md-3 mt-2" key={ index }>
          <Button
            index={ index }
            word={ item }
            insertWordImageSrc={ this.setImageSrc }
            setTranslateWord={ this.setTranslateWord }
            setCurrentWord={ this.setCurrentWord }
            setCurrentIndex={ this.setCurrentIndex }
          />
        </div>
      ); 
    });
  }

  recordSound = () => {
    const { currentWord } = this.state;  
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = SPEAK_LANGUAGE;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.addEventListener('result', (event) => {
      this.userWord = Array.from(event.results).map((res) => res[0]).map((res) => res.transcript).join('');
      this.setState({ inputValue: this.userWord });
      if (currentWord === this.userWord) {
        const index = this.state.words.findIndex((word) => word.word === currentWord );
        this.setWordDone(index);
        playAudio(SOUND.CORRECT);
        this.incrementScore();
        this.incrementStep();
      } else {
        playAudio(SOUND.ERROR);
        this.decrementScore();
      }
    });
    recognition.start();
  }

  render() {
    const { isFinish } = this.state;
    
    return (
      <React.Fragment>
        { (!isFinish) ?
        <section className="main mt-5" id="main">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 mt-5">
                <GroupButtons loadNewWords={ this.loadNewWords }/>
              </div>
              <div className="col-12 col-lg-8 mt-5">
                <Score score={ this.state.score } />
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center mt-2">
                <img
                  className="img-fluid"
                  src={ this.state.imageSrc }
                />
              </div>
              <div className="col-12">
                <div className="alert alert-info mt-2 text-center" role="alert">
                  <span id="translate">
                    { this.state.translate }
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="container">
                <div className="col-12 mt-2 d-flex justify-content-center">
                  <form>
                    <div className="form-row">
                      <div className="col-2">
                        <FontAwesomeIcon icon={ faMicrophoneAlt } />
                      </div>
                      <div className="col-10">
                        <Input value={ this.state.inputValue } />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              { this.renderWordButton() }
            </div>
            <div className="row">
              <div className="col-12 col-md-3 mt-2 mb-5">
                <RestartButton
                  setPlayWords={ this.setPlayWords }
                  resetScore={ this.resetScore }
                />
              </div>
              <div className="col-12 col-md-6 mt-2 mb-5">
                <PlayGame recordSound={ this.recordSound } />
              </div>
              <div className="col-12 col-md-3 mt-2 mb-5">
                <Stats />
              </div>
            </div>
          </div>
        </section>
        : <SpeakItEnd score={ this.state.score } /> }
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(SpeakIt);
