import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.jsx'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import { connect } from 'react-redux';
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
    quiz: props.quiz,

  }
  
}

finishQuestionWithError = () => {
  const results = this.state.results
      results[this.state.activeQuestion] = 'error'
      this.setState({
        answerState: {'timeLeft': 'error'},
        results
      })  
    this.finishQuestion();
}

onAnswerClickHandler = (answerId) => {
  
  // if (this.state.answerState) {
  //   const key = Object.keys(this.state.answerState)[0]
  //   if (this.state.answerState[key] === 'success') {
  //     return
  //   }
  // } 
  //если дожидаться пока пользователь правильно не ответит
  const question = this.state.quiz[this.state.activeQuestion]
  const results = this.state.results

  if (question.rightAnswerId === answerId) {
    if (!results[this.state.activeQuestion]) {
      results[this.state.activeQuestion] = 'success'
    }

    this.setState({
      answerState: {[answerId]: 'success'},
      results
    })   
    
  } else {
    results[this.state.activeQuestion] = 'error'
    this.setState({
      answerState: {[answerId]: 'error'},
      results
    })
  }
  this.finishQuestion();
}
//}

finishQuestion() {
  const timeout = window.setTimeout(() => {
    if (this.isQuizFinished()) {
      this.setState({
        isFinished: true
      })
      const successCount = Object.keys(this.state.results).reduce((total, key) => {
        if (this.state.results[key] === 'success') {
          total++
        }
    
        return total
      }, 0)
      const dateTime = Date.now();
      console.log(successCount, dateTime)
      this.props.setSavannaStats({
        successCount, dateTime
      })
    } else {
      this.setState({
        activeQuestion: this.state.activeQuestion + 1,
        answerState: null
      })
    }
    this.setState({timeLeft: 5});
    window.clearTimeout(timeout)
  }, 1000)
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
                finishQuestionError={this.finishQuestionWithError}
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