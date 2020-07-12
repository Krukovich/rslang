import React, { useState, useEffect } from 'react'
import './AnswersList.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = (props) => {
  useEffect(() => {
    props.play();
  })
  return (
    <>
    <ul className='AnswersList'>
      { props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            setTime={props.setTime}
            state={props.state ? props.state[answer.id] : null}
          />
        )
      }) }
    </ul>
    </>
  )
}

export default AnswersList