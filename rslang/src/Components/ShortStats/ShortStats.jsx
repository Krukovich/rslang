import React from 'react';
import './shortStats.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import english from './english.gif';

const ShortStatsHeader = () => {
  return (
    <div className="row align-items-center flex-column shortStatsHeader">
      <img src={english} alt="stats pic" />
      <h1>Серия завершена</h1>
    </div>
  )
}

const ShortStatsInfo = (props) => {
<<<<<<< HEAD
  const { total, right, newWords, rightInArrow } = props;
=======
  const { total, right, newWords, rightInARow } = props;
>>>>>>> fix
  return (
    <ul className="row align-items-center flex-column shortStatsInfo">
      <li className="shortStatsInfo-item d-flex">
        <span><FontAwesomeIcon icon={faDragon} /> Карточек завершено: </span><span>{total}</span>
      </li>
      <li className="shortStatsInfo-item d-flex">
        <span><FontAwesomeIcon icon={faCrown} /> Правильные ответы: </span><span>{right}%</span>
      </li>
      <li className="shortStatsInfo-item d-flex">
        <span><FontAwesomeIcon icon={faCartPlus} /> Новые слова: </span><span>{newWords}</span>
      </li>
      <li className="shortStatsInfo-item d-flex">
<<<<<<< HEAD
        <span><FontAwesomeIcon icon={faUserGraduate} /> Правильных ответов подряд: </span><span>{rightInArrow}</span>
=======
        <span><FontAwesomeIcon icon={faUserGraduate} /> Правильных ответов подряд: </span><span>{rightInARow}</span>
>>>>>>> fix
      </li>
    </ul>
  )
}

export default class ShortStats extends React.Component {
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> feat: stats from server BETA
=======
=======
>>>>>>> fix: token & id:rslang/src/Components/ShortStats/ShortStats.js
<<<<<<< HEAD
>>>>>>> fix: token & id
=======
=======
>>>>>>> fix: token & id:rslang/src/Components/ShortStats/ShortStats.js
>>>>>>> fix: token & id
=======
>>>>>>> fix
  render() {
    return (
      <div className="container shortStats">
        <ShortStatsHeader />
        <ShortStatsInfo {...this.props} />
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
<<<<<<< HEAD
>>>>>>> fix: token & id
=======
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
>>>>>>> fix: token & id
=======
>>>>>>> feat: stats from server BETA:rslang/src/Components/ShortStats/ShortStats.js
    render() {
        return (
            <div className="container shortStats">
                <ShortStatsHeader />
                <ShortStatsInfo {...this.props}  />
            </div>
        )
    }
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
=======
>>>>>>> feat: stats from server BETA
>>>>>>> feat: stats from server BETA:rslang/src/Components/ShortStats/ShortStats.js
<<<<<<< HEAD
>>>>>>> feat: stats from server BETA
=======
=======
>>>>>>> fix: token & id:rslang/src/Components/ShortStats/ShortStats.js
<<<<<<< HEAD
>>>>>>> fix: token & id
=======
=======
>>>>>>> fix: token & id:rslang/src/Components/ShortStats/ShortStats.js
>>>>>>> fix: token & id
=======
>>>>>>> fix
};
