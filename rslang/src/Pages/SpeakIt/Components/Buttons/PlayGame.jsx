import React from 'react';
import { Translation } from 'react-i18next';

const PlayGame = ({ recordSound }) => {
  return (
    <button
      className="btn btn-primary w-100"
      type="button"
      onClick={recordSound}
    >

      {<Translation>
        {
          (t) => <>{t('speakIt.7')}</>
        }
      </Translation>}
    </button>
  );
}

export default PlayGame;
