import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Translation } from 'react-i18next';

import { getRandomPage } from '../../service';
import { MAX_PAGE } from '../../constant';

import Content from './Components/Content/Content.jsx';
import Puzzle from './Puzzle.jsx';

const mapStateToProps = (state) => {
  return {
    level: state.appSettings.level,
    words: state.playZone.dayLearningWords,
  }
}

const PuzzleStart = (props) => {
  const [isStart, setIsStart] = useState(false);

  const { level, words } = props;
  const page = getRandomPage(MAX_PAGE);

  return (
    <React.Fragment>
      {!isStart ? <Content /> : ''}
      {isStart ? <Puzzle level={level} page={page} words={words} /> : ''}
      <div className="col-12 text-center mt-5">
        {!isStart ?
          <button
            className="btn btn-primary"
            onClick={() => setIsStart(true)}
          >
            {<Translation>
              {
                (t) => <>{t('englishPuzzle.3')}</>
              }
            </Translation>}
          </button>
          : ''
        }
      </div>
    </React.Fragment>
  );
}

export default connect(mapStateToProps)(PuzzleStart);
