import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.jsx'
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
    console.log('constr', props)
    super(props);
  this.state = {
    gameStart: false,
    results: {}, // {[id]: success error}
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'error' }
    quiz: props.quiz,
    timeLeft: 5,
  }
  
}

startTimer = () => {
  let interval = setInterval(this.tick.bind(this), 1000);
  this.setState({ interval });
};

componentDidMount() {
  this.startTimer()  
}

tick = () => {
  setInterval(this.setState(
    (prevState) => {
      return {
        timeLeft: prevState.timeLeft - 1,
      };
    }
  ),)
  const question = this.state.quiz[this.state.activeQuestion]
  const results = this.state.results
  if (this.state.timeLeft = 0) {
      results[this.state.activeQuestion] = 'error'
      this.setState({
        answerState: {'timeLeft': 'error'},
        results
      })  
    this.finishQuestion();
  }
}

onAnswerClickHandler = (answerId) => {
  // if (this.state.answerState) {
  //   const key = Object.keys(this.state.answerState)[0]
  //   if (this.state.answerState[key] === 'success') {
  //     return
  //   }
  // } 
  //если дожидаться пока пользователь правильно не ответит
console.log('state.in click', )
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
    
    console.log('state', this.state)
    return (
      <div className='Quiz'>
        <div className='QuizWrapper'>
          <h1>Ответьте на все вопросы</h1>
          <h2>Осталось {this.state.timeLeft} секунд</h2>
          {
            this.state.isFinished
             ? <FinishedQuiz
                  results={this.state.results}
                  quiz={this.state.quiz}
                  onRetry={this.retryHandler}
                />
             : <ActiveQuiz
                timeLeft={this.state.timeLeft}
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