import React from 'react';
import './verticalMenu.scss';
import { Translation } from 'react-i18next';

const VerticalMenu = (props) => {
  const {
    showAnswer,
    insertCardToDifficult,
    deleteCard,
    showBtnDeleteWord,
    showBtnDifficultWord,
    showBtnShowAgreeAnswer,
  } = props;

  return (
    <div className="Playzone-VerticalMenu btn-group-vertical">
      {showBtnDeleteWord ?
        <button
          type="button"
          className="Playzone-Btn btn btn-primary"
          onClick={deleteCard}
        >
          {<Translation>
            {
              (t) => <>{t('playzone.1')}</>
            }
          </Translation>}
        </button>
        : ''
      }
      {showBtnDifficultWord ?
        <button
          type="button"
          className="Playzone-Btn btn btn-primary"
          onClick={insertCardToDifficult}
        >
          {<Translation>
            {
              (t) => <>{t('playzone.2')}</>
            }
          </Translation>}
        </button>
        : ''
      }
      {showBtnShowAgreeAnswer ?
        <button
          type="button"
          className="Playzone-Btn btn btn-primary"
          onClick={showAnswer}
        >
          {<Translation>
            {
              (t) => <>{t('playzone.3')}</>
            }
          </Translation>}
        </button>
        : ''
      }
    </div>
  );
}

export default VerticalMenu;
