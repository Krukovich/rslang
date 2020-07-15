import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';

const SpeakItEnd = ({ score }) => {

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5 text-center">
            <h1 className="mt-5 font-weight-bold">
              {<Translation>
                {
                  (t) => <>{t('speakIt.2')}</>
                }
              </Translation>}
            </h1>
            <p className="mt-5">
              {<Translation>
                {
                  (t) => <>{t('speakIt.10')}</>
                }
              </Translation>} {score}
            </p>
            <Link to="/main-page">
              <button
                type="button"
                className="btn btn-primary mt-5"
              >
                {<Translation>
                  {
                    (t) => <>{t('speakIt.12')}</>
                  }
                </Translation>}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SpeakItEnd;
