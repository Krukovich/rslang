import React from 'react';

const Content = () => {
  return(
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5 text-center">
            <h1 className="mt-5 font-weight-bold">
              Игра English-puzzle
            </h1>
            <p className="mt-5">
              English-puzzle - мини-игра, цель которой собрать предложения из размещённых в случайном порядке английских слов.
            </p>
            <p className="mt-5">
              Для продолжения нажмите играть!
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Content;
