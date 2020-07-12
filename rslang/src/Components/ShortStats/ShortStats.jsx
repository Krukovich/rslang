import React from 'react';

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
      <h1>Серия завершена</h1>
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
            Карточек завершено: </span><span>{total}</span>
        </li>
        <li className="shortStatsInfo-item d-flex">
          <span><FontAwesomeIcon icon={faCrown} />
            Правильные ответы: </span><span>{right}%</span>
        </li>
        <li className="shortStatsInfo-item d-flex">
          <span><FontAwesomeIcon icon={faCartPlus} />
            Новые слова: </span><span>{newWords}</span>
        </li>
        <li className="shortStatsInfo-item d-flex">
          <span><FontAwesomeIcon icon={faUserGraduate} />
            Правильных ответов подряд: </span><span>{rightInArrow}</span>
        </li>
      </ul>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-4 text-center p-3">
            <NavItem href='/main-page' title='Главная' />
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
