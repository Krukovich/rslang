import React from "react";
import "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList";

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
          this.setState({
            timeLeft: this.state.timeLeft - 1,
          })
        }
      }, 1000);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    
    return (
      <div className="ActiveQuiz">
        <h2>{this.state.timeLeft}</h2>
        <div id="question" className={`questionanimated`}>
          {this.props.question}
        </div>
        <p className="Question">
          <span>
            <strong>{this.props.answerNumber}.</strong>&nbsp;
            {this.props.question}
          </span>

          <small>
            {this.props.answerNumber} из {this.props.quizLength}
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
