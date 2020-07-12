import React from "react";
import "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList";
import Button from "../UI/Button/Button";

class ActiveQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  

  audioPlay = (strLink) => {
    const audioL = new Audio(
      "https://raw.githubusercontent.com/Krukovich/rslang-data/master/" + strLink
    );
    audioL.play();
  };



  render() {
    return (
      <div className="ActiveQuiz">
       
        <div id="question" className={`questionanimated`}>
        <Button onClick={() => this.audioPlay(this.props.question)} >Play</Button>
        
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
