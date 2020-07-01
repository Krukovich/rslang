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
            <App quiz={this.state.quiz}/>
          )
      }
    return (
      <div className='container'>
        <Button variant="primary" onClick={() => this.startHandler()}>Start Game</Button>
      </div>
    )
  }
}


//export default (mapStateToProps, mapActionToProps)(Quiz);