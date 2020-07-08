import React, { Component } from "react";
import { connect } from "react-redux";

import SprintCard from "../../Components/SprintCard/SprintCard";
import StartScreen from "./StartScreen/StartScreen";
import EndScreen from "./EndScreen/EndScreen";

import "./SprintGame.scss";

import pew from './assets/pew.mp3'
import wrongPew from './assets/wrongPew.mp3'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faVolumeOff } from '@fortawesome/free-solid-svg-icons';

class SprintGame extends Component {
  constructor() {
    super();
    this.state = {
      gameStarted: false,
      gameEnded: false,
      counter: 60,
      score: 0,
      maxStreak: 0,
      modifier: 1,
      mixedArr: 0,
      activeQuestion: 0,
      mistakeCount: 0,
      words: 0,
      isSoundOn: true,
    };
    this.rightBtnRef = React.createRef();
    this.wrongBtnRef = React.createRef();
    this.selectRef = React.createRef();
  }

  async getWords(difficulty = this.props.difficulty) {
    const responce = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/words?group=${difficulty}`
    );
    const json = await responce.json();
    this.setState({
      words: json,
    });
    console.log("local state", this.state);
    return json;
  }

  mixWords = () => {
    const defaultArr = this.state.words.slice(0);
    let mixedArr = [];
    defaultArr.map((a, i) => {
      if (Math.random() > 0.3) {
        let firstPart = Math.floor(
          Math.random() * Math.floor(defaultArr.length)
        );
        let secondPart = Math.floor(
          Math.random() * Math.floor(defaultArr.length)
        );
        let isTrue = true;
        if (firstPart === secondPart) {
          isTrue = true;
        } else {
          isTrue = false;
        }

        mixedArr.push({
          firstPartEng: defaultArr[firstPart].word,
          secondPartRus: defaultArr[secondPart].wordTranslate,
          isTrue: isTrue,
        });
      } else {
        mixedArr.push({
          firstPartEng: defaultArr[i].word,
          secondPartRus: defaultArr[i].wordTranslate,
          isTrue: true,
        });
      }
    });
    this.setState({
      mixedArr: mixedArr,
    });
  };

  timer = () => {
    const timer = setInterval(() => {
      this.setState((prevState) => {
        return {
          counter: prevState.counter - 1,
        };
      });

      if (!this.state.counter) {
        // clearInterval(timer);
        this.setState({
          gameEnded: true,
        });
      }
    }, 1000);
  };

  buttonClickHandler = (event) => {
    let isRightButton = event.currentTarget.className.includes(
      "SprintCard-Button_success"
    );

    if (
      isRightButton === this.state.mixedArr[this.state.activeQuestion].isTrue
    ) {
      this.rightAnswerHandler();
    } else {
      this.wrongAnswerHandler();
    }
  };

  gameStart = props => {
    this.mixWords();
    this.timer();
    this.keyPushHandler();
    this.setState({
      gameStarted: true,
      gameEnded: false,
    })
  }

  rightAnswerHandler = () => {
    alert(this.state.maxStreak)
    this.nextCard();
    this.setState((prevState) => {
      return {
        maxStreak: prevState.maxStreak + 1,
        score: prevState.score + 10 * prevState.modifier,
      };
    });

    if (this.state.maxStreak === 3) {
      this.setState((prevState) => {
        return {
          modifier: prevState.modifier * 2,
          maxStreak: 0,
        };
      });
    }

    if (this.state.isSoundOn) {
      const audio = new Audio(pew);
      audio.play();
    }

    alert(this.state.maxStreak)
  };

  wrongAnswerHandler = () => {
    this.nextCard();
    this.setState((prevState) => {
      return {
        mistakeCount: prevState.mistakeCount + 1,
        modifier: 1,
        maxStreak: 0,
      };
    });
    if (this.state.mistakeCount >= 2) {
      this.setState({
        gameEnded: true,
      });
    }


    if (this.state.isSoundOn) {
      const audio = new Audio(wrongPew);
      audio.play();
    }
  };

  nextCard = () => {
    if (this.state.activeQuestion + 1 >= this.state.mixedArr.length) {
      this.setState({
        gameEnded: true,
      });
    } else {
      this.setState((prevState) => {
        return {
          activeQuestion: prevState.activeQuestion + 1,
        };
      });
    }
  };

  keyPushHandler = (props) => {
    document.addEventListener("keydown", (event) => {
      if (event.code === "KeyA" || event.code === "ArrowLeft") {
        this.rightBtnRef.current.focus();
        if (this.state.mixedArr[this.state.activeQuestion].isTrue) {
          this.rightAnswerHandler();
        } else {
          this.wrongAnswerHandler();
        }
      }
      if (event.code === "KeyD" || event.code === "ArrowRight") {
        this.wrongBtnRef.current.focus();
        if (!this.state.mixedArr[this.state.activeQuestion].isTrue) {
          this.rightAnswerHandler();
        } else {
          this.wrongAnswerHandler();
        }
      }
    });
  };

  gameStart = (props) => {
    try {
      this.mixWords();
      this.timer();
      this.keyPushHandler();
      this.setState({
        gameStarted: true,
        gameEnded: false,
      });
    } catch {
      alert('Подожди, пока слова не загрузятся!')
    }
  };

  gameRestart = (props) => {
    this.mixWords();
    this.setState({
      gameStarted: true,
      gameEnded: false,
      counter: 60,
      score: 0,
      maxStreak: 0,
      modifier: 1,
      activeQuestion: 0,
      mistakeCount: 0,
    });
  };

  difficultyHandler = (event) => {
    const number = event.target.value;
    this.props.onChangeDiff(number);
    this.getWords(number);
    localStorage.setItem('sprintDifficulty', number);
  };

  volumeHandler = () => {
    this.setState(prevState => {
      return {
        isSoundOn: !prevState.isSoundOn,
      }
    })
  }

  componentDidMount() {
    this.getWords();
    this.selectRef.current.children[this.props.difficulty].setAttribute('selected', 'selected');
  };

  render() {
    if (!this.state.gameStarted) {
      return (
        <div className="Sprint container mt-5">
          <div className="row">
            <div className="md-col-12 w-100 p-3 d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex align-items-center">
                <span className="mr-2">Сложность:</span>
                <select
                  ref={this.selectRef}
                  onClick={this.difficultyHandler}
                  className="d-inline-block"
                >
                  <option value="0">1</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                  <option value="3">4</option>
                  <option value="4">5</option>
                  <option value="5">6</option>
                </select>
              </div>
            </div>
          </div>
          <StartScreen gameStart={this.gameStart} />
        </div>
      );
    } else if (this.state.gameEnded) {
      return <EndScreen score={this.state.score} restart={this.gameRestart} />;
    } else {
      return (
        <div className="Sprint container mt-5">
          <div className="Sprint-Scoreboard row p-2">
            <div className="col-md-12 d-flex justify-content-center">
              <h3 className="Sprint-Score text-success">{this.state.score}</h3>
            </div>
          </div>
          <div className="Sprint-Playboard row h-75">
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex justify-content-center">
              <SprintCard
                rightBtnRef={this.rightBtnRef}
                wrongBtnRef={this.wrongBtnRef}
                mistakeCount={this.state.mistakeCount}
                eng={
                  this.state.mixedArr[this.state.activeQuestion].firstPartEng
                }
                rus={
                  this.state.mixedArr[this.state.activeQuestion].secondPartRus
                }
                maxStreak={this.state.maxStreak}
                modifier={this.state.modifier}
                onclick={this.buttonClickHandler}
              />
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="Sprint-Tools row p-2 mt-1">
            <div className="col-md-4"></div>
            <div className="Sprint-TimerBar col-md-4 d-flex justify-content-center">
              <h3 className="Sprint-Timer text-success">
                {this.state.counter}
              </h3>
              <div className='Sprint-Volume' onClick={this.volumeHandler}>
                {this.state.isSoundOn ? <FontAwesomeIcon icon={faVolumeUp} /> : <FontAwesomeIcon icon={faVolumeOff} />}
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log("redux state", state);
  return {
    difficulty: state.sprintGame.difficulty,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeDiff: (number) =>
      dispatch({ type: "CHANGE_DIFF", payload: number }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SprintGame);
