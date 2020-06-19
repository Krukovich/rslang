import React from 'react';
import './verticalMenu.scss';

const VerticalMenu = () => {
  return (
    <div class="btn-group-vertical Vertical-Menu ml-3">
      <div className="row">
        <div className="col-12">
          <button
            type="button"
            class="btn btn-primary"
          >
            Удалить
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button
            type="button"
            class="btn btn-primary"
          >
            Сложное
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button
            type="button"
            class="btn btn-primary"
          >
            Показать ответ
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerticalMenu;
