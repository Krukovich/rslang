import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return { 
    deleteWords: store.appSettings.deleteWords,
  }
}

const DeletedWords = (props) => {
  return (
    <ul className="list-group mb-4">
      {props.deleteWords.map((item) => {

        return (
          <li className="d-flex list-group-item justify-content-between align-items-center">

            <div className="d-flex justify-content-start align-items-center">
              <span className="mr-3 text-capitalize">{item}</span>
            </div>

          </li>
        )
      })}
    </ul>
  );
}

export default connect(mapStateToProps)(DeletedWords);
