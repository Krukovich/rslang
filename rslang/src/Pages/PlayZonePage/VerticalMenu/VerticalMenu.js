import React from 'react';
import './verticalMenu.scss';

const VerticalMenu = (props) => {
  const {
    insertCardToDifficult,
    deleteCard,
    settings,
  } = props;

  return (
    <div className="btn-group-vertical Vertical-Menu ml-3">
      <div className="row">
        <div className="col-12">
          { settings.showBtnDeleteWord ?
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
        <div className="col-12">
          { settings.showBtnDifficultWord ?
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
        <div className="col-12">
        { settings.showBtnShowAgreeAnswer ? 
          <button
            type="button"
            className="btn btn-primary"
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
