import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import { connect } from 'react-redux';
import { fetchAPI } from "../../../../../Components/Tools/fetchAPI";
import {createQuize } from '../../components/createQuize'
import { setSavannaStats } from '../../../../../Store/Savanna/actions';

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
  }
}

const mapActionToProps = {
  setSavannaStats,
}

class Quiz extends Component {
  constructor(props) {
    super(props);
  this.state = {
    gameStart: false,
    results: {}, // {[id]: success error}
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'error' }
    quiz: this.props.quiz,
  }
}

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: {[answerId]: 'success'},
        results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: {[answerId]: 'error'},
        results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  render() {
    return (
      <div className='Quiz'>
        <div className='QuizWrapper'>
          <h1>Ответьте на все вопросы</h1>
          {
            this.state.isFinished
             ? <FinishedQuiz
                  results={this.state.results}
                  quiz={this.state.quiz}
                  onRetry={this.retryHandler}
                />
             : <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}              
              />
          }
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapActionToProps)(Quiz);