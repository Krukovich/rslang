import React from 'react';

import SpeakIt from './SpeakIt.jsx';
import Content from './Components/Content/Content.jsx';
import { Translation } from 'react-i18next';

class SpeakItStart extends React.Component {
  constructor() {
    super();
    this.state = {
      isStart: false,
    }
  }

  setIsStart = () => {
    const { isStart } = this.state;
    this.setState({ isStart: !isStart });
  }

  render() {
    const { isStart } = this.state;

    return (
      <React.Fragment>
        {!isStart ? <Content /> : ''}
        {isStart ? <SpeakIt /> : ''}
        <div className="col-12 text-center mt-5">
          {!isStart ?
            <button
              className="btn btn-primary"
              onClick={() => this.setIsStart()}
            >
              {<Translation>
                {
                  (t) => <>{t('speakIt.3')}</>
                }
              </Translation>}
            </button>
            : ''
          }
        </div>
      </React.Fragment>
    );
  }
}

export default SpeakItStart;
