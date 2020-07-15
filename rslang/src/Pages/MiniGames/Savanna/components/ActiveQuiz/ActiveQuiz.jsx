import React from "react";
import "./ActiveQuiz.css";
import { Translation } from 'react-i18next';
import AnswersList from "./AnswersList/AnswersList";

import sec from "../../assets/sec.mp3";

class ActiveQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 7,
    };
  }

  setTime() {
    this.setState({
      timeLeft: 7,
    });
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.state.timeLeft === 0) {
        this.setTime();
        this.props.finishQuestionError();
      } else {
        const audio = new Audio(sec);
        audio.play();
        this.setState({
          timeLeft: this.state.timeLeft - 1,
        });
      }
    }, 1000);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="ActiveQuiz p-3">
        <h2 className="ActiveQuiz-Timer">{this.state.timeLeft}</h2>
        <div id="question" className={`questionanimated`}>
          {this.props.question}
        </div>
        <p className="Question">
          <span className="Question-Word mb-2">
            <strong>{this.props.answerNumber}.</strong>&nbsp;
            {this.props.question}
          </span>

          <small>
            {this.props.answerNumber} {<Translation>
              {
                (t) => <>{t('savannaGame.8')}</>
              }
            </Translation>} {this.props.quizLength}
          </small>
        </p>

        <AnswersList
          state={this.props.state}
          answers={this.props.answers}
          onAnswerClick={this.props.onAnswerClick}
          setTime={() => this.setTime()}
        />
      </div>
    );
  }
}

export default ActiveQuiz;
