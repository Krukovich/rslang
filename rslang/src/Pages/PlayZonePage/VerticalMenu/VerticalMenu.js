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
    <div className="btn-group-vertical Vertical-Menu ml-3">
      <div className="row">
        <div className="col-12 mb-1">
          { showBtnDeleteWord ?
            <button
              type="button"
              className="btn btn-primary"
              onClick={ deleteCard }
            >
              Удалить
            </button>
            : ''
          }
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-1">
          { showBtnDifficultWord ?
            <button
              type="button"
              className="btn btn-primary"
              onClick={ insertCardToDifficult }
            >
              Сложное
            </button>
            : ''
          }
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-1">
        { showBtnShowAgreeAnswer ? 
          <button
            type="button"
            className="btn btn-primary"
            onClick={ showAnswer }
          >
            Показать ответ
          </button>
          : ''
        }
        </div>
      </div>
    </div>
  );
}

export default VerticalMenu;
