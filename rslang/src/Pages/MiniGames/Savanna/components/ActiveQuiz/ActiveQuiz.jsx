import React from "react";
import "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList";
import Time from "./Time/Time";

const ActiveQuiz = (props) => {
  return (
    <div className="ActiveQuiz">
      <h2>{props.timeLeft}</h2>
      <Time />
      <div id="question" className={`questionanimated`}>
        {props.question}
      </div>
      <p className="Question">
        <span>
          <strong>{props.answerNumber}.</strong>&nbsp;
          {props.question}
        </span>

        <small>
          {props.answerNumber} из {props.quizLength}
        </small>
      </p>

      <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  );
};

export default ActiveQuiz;
