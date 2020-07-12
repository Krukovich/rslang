import React from 'react';

const Content = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5 text-center">
            <h1 className="mt-5 font-weight-bold text-white">
              Игра Speakit
            </h1>
            <p className="mt-5 text-white">
              SpeakIt - одностраничное приложение, при помощи которого можно прослушать произношение английских слов и использовать технологию распознавания речи Google Web Speech API для проверки правильности произношения.
            </p>
            <p className="mt-5 text-white">
              Для продолжения нажмите играть!
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Content;
