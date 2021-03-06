import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export const AudioComp = (props) => {
  const { gameFindWord } = props;
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
