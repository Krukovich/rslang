import React from 'react';

export const getRandomPage = (max) => Math.floor(Math.random() * Math.floor(max));

export const getWords = (group, numberOfWords) => {
  const wordsToGet = Math.min(numberOfWords, 600);
  const count = Math.ceil(wordsToGet / 20);
  const proms = [];

  for (let i = 0; i < count; i += 1) {
    proms.push(fetch(`https://afternoon-falls-25894.herokuapp.com/words?group=${ group - 1 }&page=${ i }`).then((res) => res.json()));
  }
  return Promise.allSettled(proms).then((wordLists) => wordLists.flatMap((wordList) => wordList.value).slice(0, numberOfWords));
}

export const imageRender = (src) => {
  return `https://raw.githubusercontent.com/krukovich/rslang-data/master/${ src }`; 
}

export const playExampleSound = (src) => {
  const myAudio = new Audio();
  myAudio.src = `https://raw.githubusercontent.com/krukovich/rslang-data/master/${ src }`;
  myAudio.play();
}

export const renderPlayString = (data, handlerChange) => {
  const regexp = /<b>([^<]+)<\/b>/;
  const word = data.textExample.match(regexp)[1];
  const inputStyle = { width: `${ word.length }9px` };
  const input =
    <span className="pl-1">
      <input
        className="WordInput"
        type="text"
        autoFocus
        onChange={ handlerChange }
        maxLength={ word.length }
        style={ inputStyle }
      />
    </span>
  const parts = data.textExample.split(regexp).map((part) => <span className="pl-1">{ part }</span>)
  parts.splice(1, 1, input);
  return parts;
}

export const checkDeleteWords = (array, id) => {
  return array.filter((word) => word.id === id);
}

export const saveWordsInLocalStorage = (startWords) => {
  localStorage.setItem('startWords', JSON.stringify(startWords));
}
