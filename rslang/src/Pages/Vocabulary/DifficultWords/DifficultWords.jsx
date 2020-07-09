import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return { 
    difficultWords: store.appSettings.difficultWords,
  }
}

const DifficultWords = () => {
  return(
    <span>Сложные слова</span>
  )
}

export default connect(mapStateToProps)(DifficultWords);
