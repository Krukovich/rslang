import React, { Component } from "react";
import { connect } from "react-redux";

import { createQuize } from "../../components/createQuize";
import App from "../../App";
import { Button } from "react-bootstrap";

export class SavannaStartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: false,
      quizQ: [],
      level: 1,
    };
  }

  async startHandler() {
    this.state.quizQ = await createQuize(this.state.level);
    this.setState({ gameStart: true });
  }

  difficultyHandler = (event) => {
    const number = event.target.value;
    
    this.setState({level: number});
  };

  render() {
    if (this.state.gameStart) {
      return <App 
      quiz={this.state.quizQ}
      level={this.state.level}
      />;
    }
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">САВАННА</h1>
          <p className="lead text-muted">
            Тренировка Саванна развивает словарный запас. Чем больше слов ты
            знаешь, тем больше очков опыта получишь.
          </p>
          <div className="d-flex align-items-center">
                <span className="mr-2">Сложность:</span>
                <select
                  onClick={(e) => this.difficultyHandler(e)}
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
          <p>
            <Button
              variant="btn btn-primary my-2"
              onClick={() => this.startHandler()}
            >
              Начать игру
            </Button>
          </p>
        </div>
      </section>
    );
  }
}
