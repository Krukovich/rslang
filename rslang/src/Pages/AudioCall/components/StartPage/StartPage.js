import React, { Component } from "react";
import { connect } from "react-redux";
import { createQuize } from "../../components/createQuize";
import { Translation } from 'react-i18next';
import LevelSelect from "../LevelSelect/LevelSelect";
import './StartPage.scss';
import App from "../../App";
import { Button } from "react-bootstrap";

export class AudioCallStartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: false,
      quizQ: [],
      difficulty: localStorage.getItem('audiocallDifficulty') === null ? 0 : localStorage.getItem('audiocallDifficulty'),
      level: localStorage.getItem('audiocallLvl') === null ? 0 : localStorage.getItem('audiocallLvl'),
    };
    this.difficultyRef = React.createRef();
    this.lvlRef = React.createRef();
  }

  async getWords(difficulty, level) {
    const responce = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/words?group=${difficulty}&page=${level}}`
    );
    const json = await responce.json();
    this.setState({
      quizQ: json,
    });
    return json;
  }

  async startHandler() {
    this.state.quizQ = await createQuize(this.state.quizQ);
    console.log("start page", this.state.quizQ);
    this.setState({ gameStart: true });
  }

  optionSpawner = (amount, key) => {
    let content = [];
    for (let i = 0; i <= amount; i += 1) {
      content.push(<option key={key + i} value={i}>{i + 1}</option>)
    }
    return content
  }

  difficultyHandler = (event) => {
    const number = event.target.value;
    this.setState({
      difficulty: number,
    })
    this.getWords(number, this.state.level);
    localStorage.setItem('audiocallDifficulty', number);
  };

  levelHandler = (event) => {
    const number = event.target.value;
    this.setState({
      level: number,
    })
    this.getWords(this.state.difficulty, number);
    localStorage.setItem('audiocallLvl', number);
  }

  componentDidMount() {
    this.getWords(this.state.difficulty, this.state.level);

    this.difficultyRef.current.children[this.state.difficulty].setAttribute('selected', 'selected');
    this.lvlRef.current.children[this.state.level].setAttribute('selected', 'selected');
  }

  getUserwords = () => {
    // this.setState({
    //     words: userwords,
    // })
  }

  startWithUserwords = () => {
    this.getUserwords();
    this.start();
  }

  render() {
    if (this.state.gameStart) {
      return <App quiz={this.state.quizQ} />;
    }
    return (
      <div className="Audiocall container-fluid pt-5">
        <LevelSelect
          difficultyRef={this.difficultyRef}
          lvlRef={this.lvlRef}
          difficultyHandler={this.difficultyHandler}
          levelHandler={this.levelHandler}
          optionSpawner={this.optionSpawner}
        />
        <section className="jumbotron Audiocall-jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">
              {<Translation>
                {
                  (t) => <>{t('audiocallGame.2')}</>
                }
              </Translation>}
            </h1>
            <p className="lead text-white">
              {<Translation>
                {
                  (t) => <>{t('audiocallGame.1')}</>
                }
              </Translation>}
            </p>
            <div className="Audiocall-Startscreen_btns">
              <Button
                variant="btn btn-primary my-2"
                onClick={() => this.startHandler()}
              >
                {<Translation>
                  {
                    (t) => <>{t('audiocallGame.3')}</>
                  }
                </Translation>}
              </Button>
              <Button onClick={() => this.startHandler()} variant={'primary'}>
                {<Translation>
                  {
                    (t) => <>{t('sprintGame.12')}</>
                  }
                </Translation>}
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
