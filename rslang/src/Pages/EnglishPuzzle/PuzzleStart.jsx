import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getRandomPage } from '../../service';
import { MAX_PAGE } from '../../constant';

import Content from './Components/Content/Content.jsx';
import Puzzle from './Puzzle.jsx';

const mapStateToProps = (state) => {
  return {
    level: state.appSettings.level,
  }
}

const PuzzleStart = (props) => {
  const [isStart, setIsStart] = useState(false);

  const { level } = props;
  const page = getRandomPage(MAX_PAGE);

  return(
    <React.Fragment>
      { !isStart ? <Content /> : '' }
      { isStart ? <Puzzle level={ level } page={ page } /> : '' }
      <div className="col-12 text-center mt-5">
        { !isStart ?
          <button
            className="btn btn-primary"
            onClick={ () => setIsStart(true) }
          >
            Играть
          </button> 
          : ''
        }
      </div>
    </React.Fragment>
  );
}

export default connect(mapStateToProps)(PuzzleStart);
