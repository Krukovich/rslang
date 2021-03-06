import React from "react";
import "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList";
import Button from "../UI/Button/Button";
import { Translation } from 'react-i18next';

class ActiveQuiz extends React.Component {
  constructor(props) {
    super(props);
  }

  audioPlay = (strLink) => {
    const audioL = new Audio(
      "https://raw.githubusercontent.com/Krukovich/rslang-data/master/" + strLink
    );
    audioL.play();
  };

  componentDidMount() {
    this.audioPlay(this.props.question)
  }

  render() {
    return (
      <div className="ActiveQuiz p-3">
        <div id="question" className={`questionanimated`}>
          <button className="btn-primary" onClick={() => this.audioPlay(this.props.question)} >Play</button>
        </div>
        <p className="Question">
          <span>
            <strong>{this.props.answerNumber}.</strong>&nbsp;
            <button
              className="btn-primary"
              onClick={() => alert(this.props.questionText)}>
              {<Translation>
                {
                  (t) => <>{t('audiocallGame.9')}</>
                }
              </Translation>}
            </button>
          </span>

          <small>
            {this.props.answerNumber}
            {<Translation>
              {
                (t) => <>{t('audiocallGame.8')}</>
              }
            </Translation>}
            {this.props.quizLength}
          </small>
        </p>

        <AnswersList
          play={() => this.audioPlay(this.props.question)}
          state={this.props.state}
          answers={this.props.answers}
          onAnswerClick={this.props.onAnswerClick}
        />
      </div>
    );
  }
}

export default ActiveQuiz;
