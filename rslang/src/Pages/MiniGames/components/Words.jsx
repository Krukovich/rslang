import React from "react";
import "./Style.scss";

export const Words = (props) => {
  const { wordsArray, gameStart, wordsDisplayCount } = props;
  //console.log( wordsArray, gameStart )
  if (gameStart) {
    const wordRender = wordsArray.slice(0, wordsDisplayCount).map((word, key) => (
      <div className="Word" key={key}>
        <span>{word.wordTranslate}</span>
        <button className="btn btn-primary" type="submit" id={word.id}>
          {word.word}
        </button>
      </div>
    ));

    return <div className="Words">{wordRender}</div>;
  }
  return <div>слова не загружены</div>;
};
