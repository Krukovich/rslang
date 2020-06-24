import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const RemoveBtn = ({ index, remove }) => {
    // const playExampleSound = (src) => {
    //     const myAudio = new Audio();
    //     myAudio.src = `https://raw.githubusercontent.com/Nickolay-Dudaryk/rslang-data/master/${ src }`;
    //     myAudio.play();
    // }

  return (
    <button type="button" className="btn float-left" onClick={ () => remove(index) }>
      <span><FontAwesomeIcon icon={ faTrashAlt } /></span>
    </button>
  )
}

export default RemoveBtn