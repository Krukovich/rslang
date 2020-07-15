import React from "react";
import { connect } from "react-redux";

import RestoreBtn from '../VocabularyBtn/RestoreBtn';
import {restoreDeleteWords, setDayLearningWords} from '../../../Store/PlayZonePage/actions';
import { updateUserWordsById } from '../../../service';

const mapStateToProps = (store) => {
  return { 
    deleteWords: store.playZone.deleteWords,
    learningWords: store.playZone.dayLearningWords,
  }
}

const mapActionToProps = {
  restoreDeleteWords,
  setDayLearningWords,
}


const DeletedWords = (props) => {

  const restore = (index) => {
    const a = [
      ...props.learningWords,
      props.deleteWords[index]
    ];
    props.setDayLearningWords(a);
    props.restoreDeleteWords(props.deleteWords[index].id);
    updateUserWordsById(props.deleteWords[index].id, null, false, null);
  }

  return (
    <div className="d-flex justify-content-center">
      <ul className="list-group w-100 mb-4 mt-4">
        {props.deleteWords.map((item, index) => {
          return (
            <li
              key={item.id}
              className="d-flex list-group-item justify-content-start align-items-center"
            >
              <div className="d-flex justify-content-center align-items-center">
                <RestoreBtn index={index} restore={restore}/>
                <span className="ml-3 mr-3 text-capitalize">{item.word}</span>
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

export default connect(mapStateToProps, mapActionToProps)(DeletedWords);
