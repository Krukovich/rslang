import React from 'react';

export const getRandomPage = (max) => Math.floor(Math.random() * Math.floor(max));

export const getData = async (group, page, maxLength) => {
  const prepareList = [];
  const maxPage = 20;

  const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${ group - 1 }&page=${ page }`;
  const res = await fetch(url);
  const words = await res.json();

  if (words.length < maxLength) {
    prepareList.push(...words);
    const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${ group - 1 }&page=${ getRandomPage(maxPage) }`;
    const res = await fetch(url);
    const words = await res.json();
    prepareList.push(...words);
    return prepareList.slice(0, maxLength);
  }
  return words.slice(0, maxLength); 
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
  const inputStyle = { width: `${ word.length }5px` };
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
