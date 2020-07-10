import React from 'react';
import { connect } from 'react-redux';

import Carousel from './Components/Carousel/Carousel.jsx';

const mapStateToProps = (state) => {
  return {
    dayLearningWords: state.playZone.dayLearningWords,
  }
}

const Training = (props) => {
  const { dayLearningWords } = props; 
  return(
    <Carousel words={ dayLearningWords } />
  );
}

export default connect(mapStateToProps)(Training);
