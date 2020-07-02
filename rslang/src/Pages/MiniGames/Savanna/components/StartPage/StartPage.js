import React, {Component} from 'react'
import { connect } from 'react-redux';
import {createQuize } from '../../components/createQuize'
import App from '../../App'
import {Button} from 'react-bootstrap'

export class SavannaStartPage extends Component {
  constructor(props) {
    super(props);
  this.state = {
    rule: "Играй как последний ...", 
    gameStart: false,
    quizQ: [],
    }
  }

  async startHandler() {
    this.state.quizQ = await createQuize(1);
    console.log(this.state.quizQ)
    this.setState({gameStart: true})
  }

  render() {
      if (this.state.gameStart) {
          return (
            <App quiz={this.state.quizQ}/>
          )
      }
    return (
        <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">САВАННА</h1>
          <p className="lead text-muted">Тренировка Саванна развивает словарный запас. Чем больше слов ты знаешь, тем больше очков опыта получишь.</p>
          <p>
          <Button variant="btn btn-primary my-2" onClick={() => this.startHandler()}>Начать игру</Button>
          </p>
        </div>
      </section>

    )
  }
}


//export default (mapStateToProps, mapActionToProps)(Quiz);