import React from 'react';
import './miniBtn.scss';

const MiniBtn = ({ label, showStats }) => { 
  return (
    <button type='button'
    className='btn btn-info miniBtn-text-color'
    onClick={showStats}>{label}
    </button>
  )
}

export default MiniBtn;