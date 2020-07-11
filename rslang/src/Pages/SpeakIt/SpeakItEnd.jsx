import React from 'react';
import { Link } from 'react-router-dom';

const SpeakItEnd = ({ score }) => {

  return(
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5 text-center">
            <h1 className="mt-5 font-weight-bold">
              Игра Speakit 
            </h1>
            <p className="mt-5">
              Ваш результат { score }
            </p>
            <Link to="/main-page">
              <button
                type="button"
                className="btn btn-primary mt-5"
              >
                Выход
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SpeakItEnd;
