import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons';


const RestoreBtn = ({ index, restore }) => {
  return (
    <button
      type="button"
      className="btn float-left"
      onClick={ () => restore(index) }
    >
      <FontAwesomeIcon icon={ faTrashRestore } />
    </button>
  )
}

export default RestoreBtn