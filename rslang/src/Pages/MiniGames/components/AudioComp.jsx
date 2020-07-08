import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export const AudioComp = (props) => {
  let autoPlay = true;
  const { gameFindWord } = props;
  //  if (gameFindWord.audio !== undefined && autoPlay === true) {
  //    setInterval(audioPlay(gameFindWord.audio), 1000);
  //    autoPlay = false; 
  //  } 
    return (
      <div className="text-center">
        <label>{gameFindWord.wordTranslate}</label>
        <button
          className="btn btn-primary text-center"
          onClick={() => audioPlay(gameFindWord.audio)}
        >
          <FontAwesomeIcon icon={faVolumeUp} />
          Воспроизвисти
        </button>
      </div>
    );
  }

const audioPlay = (strLink) => {
  const audioL = new Audio(
    "https://raw.githubusercontent.com/Krukovich/rslang-data/master/" + strLink
  );
  audioL.play();
};
