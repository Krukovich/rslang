import React from "react";
import "./Style.scss";

export const Words = (props) => {
  const { wordsArray, gameStart, styleFunction } = props;
  //он для меня он нужен console.log( wordsArray, gameStart ) slice(0, wordsDisplayCount)

  console.log("render words");
  if (gameStart) {
    const wordRender = shuffle(wordsArray).map((word, key) => (
      <div className="Word text-center" key={key}>
        <button
          className={wordStyle(word)}
          type="submit"
          id={word.id}
          onClick={(event) => styleFunction(event.target.id, key)}
        >
          {word.word}
        </button>
      </div>
    ));

    return <div className="Words ">{wordRender}</div>;
  }
  return <div>слова не загружены</div>;
};

function shuffle(arr) {
  var j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const wordStyle = (word) => {
  if (word === "red") {
    return "btn btn-danger";
  }
  if (word === "green") {
    return "btn btn-success";
  } else {
    return "btn btn-primary";
  }
};
