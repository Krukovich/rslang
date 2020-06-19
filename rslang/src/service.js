import React from 'react';

export const imageRender = (src) => {
  return `https://raw.githubusercontent.com/krukovich/rslang-data/master/${ src }`; 
}

export const playExampleSound = (src) => {
  const myAudio = new Audio();
  myAudio.src = `https://raw.githubusercontent.com/krukovich/rslang-data/master/${ src }`;
  myAudio.play();
}

export const renderPlayString = (data) => {
  const regexp = /<[^<>]+>/g;
  const word = data.word;
  const inputStyle = { width: `${ word.length }5px` };
  let tempString;

  tempString = data.textExample.replace(regexp, '');
  tempString = tempString.replace(data.word, '__');
  const tempCharArray = tempString.split(' ');

  const string = tempCharArray.map((char, index) => {
    if (char === '__' || char === '__.' ) {
      return(
        <span className="m-1" key={ index }>
          <input
            className="WordInput"
            type="text"
            autoFocus
            maxLength={ word.length }
            style={ inputStyle }
          />
        </span>
      );
    } else {
      return(
        <span className="m-1" key={ index }>
          { char }
        </span>
      );
    }
  });
  return string;
}
