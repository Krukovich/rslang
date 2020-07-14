import React, { Component } from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz.jsx";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import { connect } from "react-redux";
import { setAudioCallStats } from "../../../../Store/Savanna/actions";

const mapStateToProps = (store) => {
  const {
    dayLearningWords,
    difficultWords,
    showBtnShowAgreeAnswer,
    showTranslateWord,
    showExplanationString,
    playExampleSound,
    showWordImage,
    showWordsTranscription,
    minigameSavannaStats,
  } = store.appSettings;

  return {
    showWordsTranscription: showWordsTranscription,
    showWordImage: showWordImage,
    playExampleSound: playExampleSound,
    showExplanationString: showExplanationString,
    showTranslateWord: showTranslateWord,
    showBtnShowAgreeAnswer: showBtnShowAgreeAnswer,
    difficultWords: difficultWords,
    dayLearningWords: dayLearningWords,
    cards: store.playZone.cards,
    stats: minigameSavannaStats,
  };
};

const mapActionToProps = {
  setAudioCallStats,
};

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: false,
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
      quiz: props.quiz,
    };
  }

  finishQuestionWithError = () => {
    const results = this.state.results;
    results[this.state.activeQuestion] = "error";
    this.setState({
      answerState: { timeLeft: "error" },
      results,
    });
    this.finishQuestion();
  };

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[this.state.activeQuestion]) {
        results[this.state.activeQuestion] = "success";
      }

      this.setState({
        answerState: { [answerId]: "success" },
        results,
      });
    } else {
      results[this.state.activeQuestion] = "error";
      this.setState({
        answerState: { [answerId]: "error" },
        results,
      });
    }
    this.finishQuestion();
  };
  //}

  finishQuestion() {
    const timeout = window.setTimeout(() => {
      if (this.isQuizFinished()) {
        this.setState({
          isFinished: true,
        });
        const successCount = Object.keys(this.state.results).reduce(
          (total, key) => {
            if (this.state.results[key] === "success") {
              total++;
            }

            return total;
          },
          0
        );
        const dateTime = Date.now();
        this.props.setAudioCallStats({
          successCount,
          dateTime,
        });
      } else {
        this.setState({
          activeQuestion: this.state.activeQuestion + 1,
          answerState: null,
        });
        this.audioPlay(this.state.quiz[this.state.activeQuestion].audio);
      }
    }, 1500);
  }
  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };
  componentDidMount() { }

  audioPlay = (strLink) => {
    const audioL = new Audio(
      "https://raw.githubusercontent.com/Krukovich/rslang-data/master/" +
      strLink
    );
    audioL.play();
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="Quiz Audiocall">
              <div className="QuizWrapper">
                <h1>Ответьте на все вопросы</h1>
                {this.state.isFinished ? (
                  <FinishedQuiz
                    results={this.state.results}
                    quiz={this.state.quiz}
                    onRetry={this.retryHandler}
                  />
                ) : (
                    <ActiveQuiz
                      finishQuestionError={this.finishQuestionWithError}
                      answers={this.state.quiz[this.state.activeQuestion].answers}
                      question={this.state.quiz[this.state.activeQuestion].audio}
                      questionText={
                        this.state.quiz[this.state.activeQuestion].question
                      }
                      onAnswerClick={this.onAnswerClickHandler}
                      quizLength={this.state.quiz.length}
                      answerNumber={this.state.activeQuestion + 1}
                      state={this.state.answerState}
                    />
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(Quiz);
