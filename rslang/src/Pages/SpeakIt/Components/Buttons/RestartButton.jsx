import React from 'react';
import { Translation } from 'react-i18next';

const RestartButton = ({ setPlayWords, resetScore }) => {
  return (
    <button
      className="btn btn-primary w-100"
      type="button"
      onClick={() => {
        setPlayWords();
        resetScore();
      }}
    >
      {<Translation>
        {
          (t) => <>{t('speakIt.8')}</>
        }
      </Translation>}
    </button>
  );
}

export default RestartButton;
