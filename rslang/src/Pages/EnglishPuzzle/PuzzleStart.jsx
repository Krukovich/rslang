import React, { useState } from 'react';

import Content from './Components/Content/Content.jsx';
import Puzzle from './Puzzle.jsx';

const PuzzleStart = () => {

  const [isStart, setIsStart] = useState(false);

  return(
    <React.Fragment>
      { !isStart ? <Content /> : '' }
      { isStart ? <Puzzle /> : '' }
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

export default PuzzleStart;
