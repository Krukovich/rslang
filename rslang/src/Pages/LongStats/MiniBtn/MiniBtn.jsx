import React from 'react';

const MiniBtn = ({ label, showStats }) => { 
  return (
    <button type='button'
    className='btn btn-outline-success'
<<<<<<< HEAD
    onClick={showStats}>{label}
=======
    onClick={showStats}>Button {label}
>>>>>>> mini games BTNs
    </button>
  )
}

export default MiniBtn;