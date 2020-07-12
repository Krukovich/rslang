import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons';


const DeleteBtn = ({ index, del }) => {
  return (
    <button
      type="button"
      className="btn float-left"
      onClick={ () => del(index) }
    >
      <FontAwesomeIcon icon={ faTrashRestore } />
    </button>
  )
}

export default DeleteBtn