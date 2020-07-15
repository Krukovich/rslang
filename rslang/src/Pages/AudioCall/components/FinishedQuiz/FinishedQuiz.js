import React from 'react'
import './FinishedQuiz.css'
import Button from '../UI/Button/Button'
import { Translation } from 'react-i18next';

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)


  return (
    <div className='FinishedQuiz'>
      <ul>
        {props.quiz.map((quizItem, index) => {
          let cls = 'fa ' + props.results[quizItem.id] === 'error ' ? 'fa-times ' : 'fa-check ' + props.results[quizItem.id];
          return (
            <li
              key={index}
            >
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls} />
            </li>
          )

        })}
      </ul>

      <p>
        {<Translation>
          {
            (t) => <>{t('audiocallGame.5')}</>
          }
        </Translation>}
        {successCount}
        {<Translation>
          {
            (t) => <>{t('audiocallGame.8')}</>
          }
        </Translation>}
        {props.quiz.length}</p>

      <div>
        <Button onClick={props.onRetry} type="primary">
          {<Translation>
            {
              (t) => <>{t('audiocallGame.6')}</>
            }
          </Translation>}
        </Button>
      </div>
    </div>
  )
}

export default FinishedQuiz