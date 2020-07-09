import React from "react";
import { AlertRed } from "../../../Components/Alert/Alert";
import { Words } from "../components/Words";
import { AudioComp } from "../components/AudioComp";
import "./AudioCall.scss";
import { fetchAPI } from "../../../Components/Tools/fetchAPI";
import { Redirect} from "react-router-dom"

export class AudioCall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameStart: false,
      gameProgress: 0,
      gameTime: 0,
      gameScore: 0,
      gameProgress: 0,
      wordsArray: [],
      wordsDisplayCount: 5,
      gameButton: "продолжить",
      gameStage: 1,
      gameFindWord: null,
      showAlert: false,
      fail: false,
    };

    this.gameSuccessAnswer = 0;
  }

  wordsArraySwitch = (id, key) => {
    const temp = this.state.wordsArray;
    if (id === this.state.gameFindWord.id) {
      temp[key] = "green";
      if (!this.state.fail) {
        this.gameSuccessAnswer = this.gameSuccessAnswer++;
      }
      this.nextStage();
    } else {
      //this.setState({ fail: true });
      temp[key] = "red";
    }
    this.setState({ wordsArray: temp });
  };

  levelGenerator = (wordsArray) => {
    const rand = Math.floor(Math.random() * 20);
    const wordFind = wordsArray[rand];
    const arrayOfWords = [];
    arrayOfWords.push(wordFind); //избавится от перемешивания повторного
    for (let i = 0; arrayOfWords.length < 5; i++) {
      const randTemp = Math.floor(Math.random() * 20);
      if (!arrayOfWords.includes(arrayOfWords[randTemp])) {
        arrayOfWords.push(wordsArray[randTemp]);
      }
    }
    this.setState({ gameFindWord: wordFind });
    return arrayOfWords;
  };

  randomWords = async (page, group) => {
    const content = await fetchAPI("words", { page: page, group: group });
    const arrayOfWords = this.levelGenerator(content);
    //this.setState({ wordsArray: arrayOfWords });
    console.log("redy to game");
    return content;
  };

  startGame = () => {
    this.setState({ gameStart: true });
  };

  nextStage = () => {
    if (this.state.gameStage > 5) {
      this.endGame();
    }
   // this.setState({ fail: false });
    const stageNow = this.state.gameStage;
    const stageNext = stageNow + 1;
    //this.setState({ gameStage: stageNext });
    this.randomWords(Math.floor(Math.random() * 6), this.state.gameStage);
    console.log("stage", this.state.gameStage);
  };

  endGame() {    
    const time = Date.now();
    const stats = this.state.gameSuccessAnswer;
    const obj = {time, stats};
    this.writeStats(obj);
    //this.setState({ showAlert: true });
  }

  writeStats = async (statsObj) => {
    const content = await fetchAPI("users-set-statistics", statsObj);
    const arrayOfWords = this.levelGenerator(content);

    //this.setState({ wordsArray: arrayOfWords });
    console.log("stats write");
    return content;
  };

  componentDidMount() {
    if (this.state.wordsArray.length === 0) {
      this.randomWords(Math.floor(Math.random() * 6), this.state.gameStage);
    }
    console.log("componentDidMount", this.state.wordsArray);
  }

  render() {
    return (
      <AlertRed
        showAlert={this.state.showAlert}
        HeadText={"Вы прошли уровень"}
        MainText={"верно ответили на " + this.state.gameSuccessAnswer}
        onSubmit={<Redirect to="/audiocall" />}
      >
        <div className="AudioCall vh-100">
          <h1>AudioCall</h1>

          <div className="text-center">
            <ButtonStartGame
              startGame={() => this.startGame()}
              gameStart={this.state.gameStart}
              gameStage={this.state.gameStage}
            />
          </div>
          {this.state.gameStart?
            <AudioComp
            gameFindWord={this.state.gameFindWord}
            gameStage={this.state.gameStage}
          /> : null
          }
          {this.state.gameStart?
            <Words
            wordsArray={this.state.wordsArray}
            gameStart={this.state.gameStart}
            wordsDisplayCount={this.state.wordsDisplayCount}
            gameFindWord={this.state.gameFindWord}
            styleFunction={(id, key) => this.wordsArraySwitch(id, key)}
            gameStage={this.state.gameStage}
          /> : <div>слова не загружены</div>
          }
          
          <div className="text-center">
            <ButtonNextStage
              className="align-center"
              nextStage={() => this.nextStage()}
              gameStart={this.state.gameStart}
              gameButton={this.state.gameButton}
            />
          </div>
        </div>
      </AlertRed>
    );
  }
}

function ButtonStartGame(props) {
  if (props.gameStart) {
    return (
      <div>
        <span>игра начата</span> уровень №{props.gameStage}
      </div>
    );
  } else {
    return (
      <button className="btn btn-primary " onClick={() => props.startGame()}>
        Начать игру
      </button>
    );
  }
}

function ButtonNextStage(props) {
  if (props.gameStart) {
    return (
      <button className="btn btn-primary " onClick={() => props.nextStage()}>
        {props.gameButton}
      </button>
    );
  } else {
    return null;
  }
}
