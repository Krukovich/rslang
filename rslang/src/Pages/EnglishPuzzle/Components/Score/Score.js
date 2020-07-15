import React from 'react';
import { Translation } from 'react-i18next';

const Score = ({ score }) => {
  return (
    <span className="badge badge-secondary">
      {<Translation>
        {
          (t) => <>{t('englishPuzzle.5')}</>
        }
      </Translation>} {score}
    </span>
  );
}

export default Score;
