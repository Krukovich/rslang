import React from 'react';
import './miniBtn.scss';
import { Translation } from 'react-i18next';

const MiniBtn = ({ label, showStats }) => {
  return (
    <button type='button'
      className='btn btn-info miniBtn-text-color'
      onClick={showStats}>
      {<Translation>
        {
          (t) => <>{t(label)}</>
        }
      </Translation>}
      {/* {label} */}
    </button>
  )
}

export default MiniBtn;