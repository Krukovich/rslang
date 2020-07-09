import React from 'react'
import './AnswerItem.css'

const AnswerItem = props => {
  let cls = 'AnswerItem ';

  if (props.state) {
    cls = cls + props.state;
  }

  return (
    <li
      className={cls}
      onClick={() => {
        props.onAnswerClick(props.answer.id)
        props.setTime();
      }}
    >
      { props.answer.text }
    </li>
  )
}

export default AnswerItem