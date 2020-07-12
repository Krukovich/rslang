import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createQuize } from '../../components/createQuize'
import App from '../../App'
import { Button } from 'react-bootstrap'
import LevelSelect from '../LevelSelect/LevelSelect.jsx'

export class SavannaStartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rule: "Играй как последний ...",
      gameStart: false,
      quizQ: [],
      difficulty: localStorage.getItem('savannaDifficulty') === null ? 0 : localStorage.getItem('savannaDifficulty'),
      level: localStorage.getItem('savannaLvl') === null ? 0 : localStorage.getItem('savannaLvl'),
    }
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
    // try {

    // } catch {
    //   alert('Подожди, пока не загрузятся слова!')
    // }
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
    localStorage.setItem('savannaDifficulty', number);
  };

  levelHandler = (event) => {
    const number = event.target.value;
    this.setState({
      level: number,
    })
    this.getWords(this.state.difficulty, number);
    localStorage.setItem('savannaLvl', number);
  }

  componentDidMount() {
    this.getWords(this.state.difficulty, this.state.level);

    this.difficultyRef.current.children[this.state.difficulty].setAttribute('selected', 'selected');
    this.lvlRef.current.children[this.state.level].setAttribute('selected', 'selected');
  }

  render() {
    if (this.state.gameStart) {
      return (
        <App quiz={this.state.quizQ} />
      )
    }
    return (
      <div className="Savanna container-fluid pt-5">
        <LevelSelect
          difficultyRef={this.difficultyRef}
          lvlRef={this.lvlRef}
          difficultyHandler={this.difficultyHandler}
          levelHandler={this.levelHandler}
          optionSpawner={this.optionSpawner}
        />
        <section className="jumbotron text-center text-white" >
          <div className="container">
            <h1 className="jumbotron-heading">САВАННА</h1>
            <p className="lead text-white">Тренировка Саванна развивает словарный запас. Чем больше слов ты знаешь, тем больше очков опыта получишь.</p>
            <p>
              <Button variant="btn btn-primary my-2" onClick={() => this.startHandler()}>Начать игру</Button>
            </p>
          </div>
        </section>
      </div>
    )
  }
}


//export default (mapStateToProps, mapActionToProps)(Quiz);