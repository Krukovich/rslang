import React from 'react';
import './verticalMenu.scss';

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
          Удалить
            </button>
        : ''
      }
      {showBtnDifficultWord ?
        <button
          type="button"
          className="Playzone-Btn btn btn-primary"
          onClick={insertCardToDifficult}
        >
          Сложное
            </button>
        : ''
      }
      {showBtnShowAgreeAnswer ?
        <button
          type="button"
          className="Playzone-Btn btn btn-primary"
          onClick={showAnswer}
        >
          Ответ
          </button>
        : ''
      }
    </div>
  );
}

export default VerticalMenu;
