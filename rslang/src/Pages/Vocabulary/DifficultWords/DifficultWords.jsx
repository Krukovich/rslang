import React from 'react'
import { connect } from 'react-redux';

import DeleteBtn from '../VocabularyBtn/DeleteBtn';
import { deleteDifficultWords } from '../../../Store/PlayZonePage/actions';
import { putUserWordsById } from '../../../service';

const mapStateToProps = (store) => {
  return { 
    difficultWords: store.playZone.difficultWords,
  }
}

const mapActionToProps = {
  deleteDifficultWords,
}

const DifficultWords = (props) => {

  const del = (index) => {
    props.deleteDifficultWords(props.difficultWords[index].id);
    putUserWordsById(props.difficultWords[index].id, false, null, null);
  }

  return (
    <div className="d-flex justify-content-center">
      <ul className="list-group w-100 mb-4 mt-4">
        {props.difficultWords.map((item, index) => {
          return (
            <li
              key={item.id}
              className="d-flex list-group-item justify-content-start align-items-center"
            >
              <div className="d-flex justify-content-center align-items-center">
                <DeleteBtn index={index} del={del}/>
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
}

export default connect(mapStateToProps, mapActionToProps)(DifficultWords);
