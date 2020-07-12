import React from "react";
import "./Style.scss";

export class Words extends React.Component {
  constructor(props) {
    super(props);

    this.wordsArray = this.props.wordsArray;
    this.styleFunction = this.props.styleFunction;
    this.gameFindWord = this.props.gameFindWord;
  }

  componentDidMount() {
    audioPlay(this.gameFindWord.audio);
  }

  render() {
    return (
      <div className="Words ">
        {wordRender(this.wordsArray, this.styleFunction)}
      </div>
    );
  }
}

const audioPlay = (strLink) => {
  const audioPlay = new Audio(
    "https://raw.githubusercontent.com/Krukovich/rslang-data/master/" + strLink
  );
  audioPlay.play();
};

function wordRender(wordsArray, styleFunction) {
  return shuffle(wordsArray).map((word, key) => (
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
}

function shuffle(arr) {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
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
