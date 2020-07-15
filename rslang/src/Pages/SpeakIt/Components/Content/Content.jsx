import React from 'react';
import { Translation } from 'react-i18next';

const Content = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5 text-center">
            <h1 className="mt-5 font-weight-bold text-white">
              {<Translation>
                {
                  (t) => <>{t('speakIt.2')}</>
                }
              </Translation>}
            </h1>
            <p className="mt-5 text-white">
              {<Translation>
                {
                  (t) => <>{t('speakIt.1')}</>
                }
              </Translation>}
            </p>
            <p className="mt-5 text-white">
              {<Translation>
                {
                  (t) => <>{t('speakIt.4')}</>
                }
              </Translation>}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Content;
