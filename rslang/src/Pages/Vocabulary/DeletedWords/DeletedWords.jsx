import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (store) => {
  return {
    deleteWords: store.playZone.deleteWords,
  };
};

const DeletedWords = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <ul className="list-group w-25 mb-4 mt-4">
        {props.deleteWords.map((item) => {
          return (
            <li
              key={item.id}
              className="d-flex list-group-item justify-content-between align-items-center"
            >
              <div className="d-flex justify-content-center align-items-center">
                <span className="mr-3 text-capitalize">{item.word}</span>
                <span className="mr-3">{item.transcription}</span>
                <span className="mr-3 text-capitalize">
                  {item.wordTranslate}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(DeletedWords);
