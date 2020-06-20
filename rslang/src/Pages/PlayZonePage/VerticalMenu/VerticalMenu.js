import React from 'react';
import './verticalMenu.scss';

const VerticalMenu = (props) => {
  const { cards, setDifficultWords, difficultWords } = props;

  const pushWordInDifficult = () => {
    setDifficultWords(cards);
    console.log(difficultWords);
  }

  return (
    <div className="btn-group-vertical Vertical-Menu ml-3">
      <div className="row">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
          >
            Удалить
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
            onClick={ pushWordInDifficult }
          >
            Сложное
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
          >
            Показать ответ
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerticalMenu;
