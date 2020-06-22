import React from 'react';

export const AudioComp = (props) => {
  const { wordsArray, gameStart } = props;
  const rand = Math.floor(Math.random() * 20);
  const word = wordsArray[rand];
  console.log(props)
  //console.log( wordsArray, gameStart )
  if (gameStart) {
    return (
      <div>
        <label>{word.wordTranslate}</label>
        <button 
          onClick={() => audioPlay(word.audio)}>
          Воспроизвисти
          </button>
      </div>
    )
  }
  return (
    <div>
      Звука нет
    </div>
  )
};

const audioPlay = (strLink) => {
  const audioL = new Audio('https://raw.githubusercontent.com/Krukovich/rslang-data/master/' + strLink);
  audioL.play();
}
