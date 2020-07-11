import React, { Component } from "react";
import { connect } from "react-redux";

import SprintCard from "../../Components/SprintCard/SprintCard";
import StartScreen from "./StartScreen/StartScreen";
import EndScreen from "./EndScreen/EndScreen";
import LevelSelect from "./LevelSelect/LevelSelect";
import { fetchAPI } from "../../Components/Tools/fetchAPI";

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
      borderColor: '',
      wrongAnswers: [],
      rightAnswers: [],
      difficulty: localStorage.getItem('sprintDifficulty') === null ? 0 : localStorage.getItem('sprintDifficulty'),
      level: localStorage.getItem('sprintLvl') === null ? 0 : localStorage.getItem('sprintLvl'),
    };
    this.rightBtnRef = React.createRef();
    this.wrongBtnRef = React.createRef();
    this.difficultyRef = React.createRef();
    this.lvlRef = React.createRef();
    this.timerCounter = 0;
    this.timerStyle = 0;
  }

  async getWords(difficulty = this.state.difficulty, level = this.state.level) {
    const responce = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/words?group=${difficulty}&page=${level}}`
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
      if (Math.random() > 0.5) {
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
          firstPartRus: defaultArr[firstPart].wordTranslate,
          audio: defaultArr[firstPart].audio,
          secondPartRus: defaultArr[secondPart].wordTranslate,
          isTrue: isTrue,
        });
      } else {
        mixedArr.push({
          firstPartEng: defaultArr[i].word,
          firstPartRus: defaultArr[i].wordTranslate,
          audio: defaultArr[i].audio,
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
    this.timerCounter = setInterval(() => {
      this.setState((prevState) => {
        return {
          counter: prevState.counter - 1,
        };
      });

      if (!this.state.counter) {
        this.gameEnd();
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

  rightAnswerHandler = () => {
    this.updateLocalStats(this.state.mixedArr[this.state.activeQuestion], this.state.rightAnswers);

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

    this.audioHandler(pew);
    this.borderPainter('green');
  };

  wrongAnswerHandler = () => {
    this.updateLocalStats(this.state.mixedArr[this.state.activeQuestion], this.state.wrongAnswers);

    this.nextCard();
    this.setState((prevState) => {
      return {
        mistakeCount: prevState.mistakeCount + 1,
        modifier: 1,
        maxStreak: 0,
      };
    });
    if (this.state.mistakeCount >= 2) {
      this.gameEnd();
    }

    this.audioHandler(wrongPew);
    this.borderPainter('red');
  };

  updateLocalStats = (word, arr) => {
    const wordArr = arr;
    wordArr.push(word);

    this.setState({
      arr: wordArr
    })
  }

  audioHandler = (sound) => {
    if (this.state.isSoundOn) {
      const audio = new Audio(sound);
      audio.play();
    }
  }

  nextCard = () => {
    if (this.state.activeQuestion + 1 >= this.state.mixedArr.length) {
      this.gameEnd();
    } else {
      this.setState((prevState) => {
        return {
          activeQuestion: prevState.activeQuestion + 1,
        };
      });
    }
  };

  keyPushHandler = (event) => {
    document.addEventListener("keydown", (event) => {
      if (event.code === "KeyA" || event.code === "ArrowLeft") {
        this.buttonClicker(this.rightBtnRef);
      }
      if (event.code === "KeyD" || event.code === "ArrowRight") {
        this.buttonClicker(this.wrongBtnRef);
      }
    });
  };

  buttonClicker = (button) => {
    try {
      button.current.focus();
      button.current.click();
    } catch {
      return
    }
  }

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

  writeStats = async (statsObj) => {
    const content = await fetchAPI("users-set-statistics", statsObj);
    console.log("stats write");
    return content;
  };

  gameEnd = () => {
    this.setState({
      gameEnded: true,
    })

    const score = this.state.score;
    const time = Date.now();
    const statsObj = { score, time };

    this.writeStats(statsObj);

    setTimeout(() => {
      this.difficultyRef.current.children[this.state.difficulty].setAttribute('selected', 'selected');
      this.lvlRef.current.children[this.state.level].setAttribute('selected', 'selected');
    }, 0);
  }

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
      rightAnswers: [],
      wrongAnswers: [],
    });
  };

  difficultyHandler = (event) => {
    const number = event.target.value;
    this.setState({
      difficulty: number,
    })
    this.getWords(number, this.state.level);
    localStorage.setItem('sprintDifficulty', number);
  };

  levelHandler = (event) => {
    const number = event.target.value;
    this.setState({
      level: number,
    })
    this.getWords(this.state.difficulty, number);
    localStorage.setItem('sprintLvl', number);
  }

  volumeHandler = () => {
    this.setState(prevState => {
      return {
        isSoundOn: !prevState.isSoundOn,
      }
    })
  }

  borderPainter = (color) => {
    if (color === 'green') {
      this.setState({
        borderColor: 'rgba(30,130,76,0.9)',
      })
    } else if (color === 'red') {
      this.setState({
        borderColor: 'rgba(240,52,52,0.9)',
      })
    }
  }

  optionSpawner = (amount, key) => {
    let content = [];
    for (let i = 0; i <= amount; i += 1) {
      content.push(<option key={key + i} value={i}>{i + 1}</option>)
    }
    return content
  }

  componentDidMount() {
    this.getWords();
    this.difficultyRef.current.children[this.state.difficulty].setAttribute('selected', 'selected');
    this.lvlRef.current.children[this.state.level].setAttribute('selected', 'selected');

    this.timerStyle = setInterval(() => {
      let bcolor = this.state.borderColor.split('');
      if (bcolor[bcolor.length - 2] !== 0) {
        bcolor[bcolor.length - 2] = bcolor[bcolor.length - 2] - 1;
        this.setState({
          borderColor: bcolor.join('')
        })
      }
    }, 50)
  };

  componentWillUnmount() {
    clearInterval(this.timerStyle);
    clearInterval(this.timerCounter);
  }

  render() {
    if (!this.state.gameStarted) {
      return (
        <div className="Sprint container-fluid pt-5">
          <LevelSelect
            difficultyRef={this.difficultyRef}
            lvlRef={this.lvlRef}
            difficultyHandler={this.difficultyHandler}
            levelHandler={this.levelHandler}
            optionSpawner={this.optionSpawner}
          />
          <StartScreen gameStart={this.gameStart} />
        </div>
      );
    } else if (this.state.gameEnded) {
      return (
        <div className="Sprint container-fluid pt-5">
          <LevelSelect
            difficultyRef={this.difficultyRef}
            lvlRef={this.lvlRef}
            difficultyHandler={this.difficultyHandler}
            levelHandler={this.levelHandler}
            optionSpawner={this.optionSpawner}
          />
          <EndScreen
            score={this.state.score}
            restart={this.gameRestart}
            rightAnswers={this.state.rightAnswers}
            wrongAnswers={this.state.wrongAnswers}
          />
        </div>
      )
    } else {
      return (
        <div className="Sprint container-fluid pt-5">
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
                onkey={this.keyPushHandler}
                borderColor={this.state.borderColor}
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
    level: state.sprintGame.level
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeDiff: (number) =>
      dispatch({ type: "CHANGE_DIFF", payload: number }),
    onChangeLvl: (number) =>
      dispatch({ type: "CHANGE_LVL", payload: number }),
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(SprintGame);
export default SprintGame