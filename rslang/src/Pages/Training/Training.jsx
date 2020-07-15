import React from 'react';
import { connect } from 'react-redux';

import Slider from './Components/Slider/Slider.jsx';

const mapStateToProps = (state) => {
  return {
    dayLearningWords: state.playZone.dayLearningWords || JSON.parse(localStorage.startWords),
  }
}

const Training = (props) => {
  const { dayLearningWords } = props; 
  return(
    <Slider words={ dayLearningWords } />
  );
}

export default connect(mapStateToProps)(Training);
