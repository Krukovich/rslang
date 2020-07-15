import React from 'react';
import { Translation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import { NavItem } from '../Sidebar/NavItem/NavItem';

import english from './english.gif';
import './shortStats.scss';

const ShortStatsHeader = () => {
  return (
    <div className="row align-items-center flex-column shortStatsInfo">
      <img src={english} alt="stats pic" />
      <h1>
        {<Translation>
          {
            (t) => <>{t('playzone.5')}</>
          }
        </Translation>}
      </h1>
    </div>
  )
}

const ShortStatsInfo = (props) => {
  const { total, right, newWords, rightInArrow } = props;
  return (
    <React.Fragment>
      <ul className="row align-items-center flex-column shortStatsInfo">
        <li className="shortStatsInfo-item d-flex">
          <span><FontAwesomeIcon icon={faDragon} />
            {<Translation>
              {
                (t) => <>{t('playzone.6')}</>
              }
            </Translation>} </span><span>{total}</span>
        </li>
        <li className="shortStatsInfo-item d-flex">
          <span><FontAwesomeIcon icon={faCrown} />
            {<Translation>
              {
                (t) => <>{t('playzone.7')}</>
              }
            </Translation>} </span><span>{right}%</span>
        </li>
        <li className="shortStatsInfo-item d-flex">
          <span><FontAwesomeIcon icon={faCartPlus} />
            {<Translation>
              {
                (t) => <>{t('playzone.8')}</>
              }
            </Translation>} </span><span>{newWords}</span>
        </li>
        <li className="shortStatsInfo-item d-flex">
          <span><FontAwesomeIcon icon={faUserGraduate} />
            {<Translation>
              {
                (t) => <>{t('playzone.9')}</>
              }
            </Translation>} </span><span>{rightInArrow}</span>
        </li>
      </ul>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-4 text-center p-3">
            <NavItem href='/main-page' title='playzone.10' />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default class ShortStats extends React.Component {
  render() {
    return (
      <div className="container shortStats mt-5">
        <ShortStatsHeader />
        <ShortStatsInfo {...this.props} />
      </div>
    )
  }
};
