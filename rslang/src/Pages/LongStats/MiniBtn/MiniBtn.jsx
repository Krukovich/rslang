import React from 'react';

const MiniBtn = ({ label, showStats }) => { 
  return (
    <button type='button'
    className='btn btn-outline-success'
    onClick={showStats}>{label}

    </button>
  )
}

export default MiniBtn;