import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return { 
    difficultWords: store.appSettings.difficultWords,
  }
}

const DifficultWords = (props) => {
  return(
  <span> {props.difficultWords} </span>
  )
}

export default connect(mapStateToProps)(DifficultWords);
