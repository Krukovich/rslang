import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return { 
    difficultWords: store.playZone.difficultWords,
  }
}

const DifficultWords = (props) => {
  return(
    <ul className="list-group mb-4">
    {props.difficultWords.map((item) => {

      return (
        <li key={item.id} className="d-flex list-group-item justify-content-between align-items-center">

          <div className="d-flex justify-content-start align-items-center">
            <span className="mr-3 text-capitalize">{item.word}</span>
          </div>

        </li>
      )
    })}
  </ul>
  )
}

export default connect(mapStateToProps)(DifficultWords);
