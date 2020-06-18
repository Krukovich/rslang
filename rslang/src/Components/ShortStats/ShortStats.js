import React from 'react';
import './shortStats.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import english from './english.gif';

const dataInfo ={
    total: 50,
    right: 75,
    newWords: 43,
    rightInARow: 15,
}

const ShortStatsHeader = () => {
    return (
        <div className="row align-items-center flex-column shortStatsHeader">
            <img src={english} alt="stats pic" />
            <h1>Серия завершена</h1>
        </div>
    )
}

const ShortStatsInfo = () => {
    const { total, right, newWords, rightInARow } = dataInfo; 
    return (
        <ul className="row align-items-center flex-column shortStatsInfo">
            <li className="shortStatsInfo-item d-flex"><span><FontAwesomeIcon icon={ faDragon } /> Карточек завершено:  </span><span>{total}</span></li>
            <li className="shortStatsInfo-item"><FontAwesomeIcon icon={ faCrown } /> Правильные ответы: {right} %</li>
            <li className="shortStatsInfo-item"><FontAwesomeIcon icon={ faCartPlus } /> Новые слова: {newWords}</li>
            <li className="shortStatsInfo-item"><FontAwesomeIcon icon={ faUserGraduate } /> Правильных ответов подряд: {rightInARow}</li>
        </ul>
    )
}
export default class ShortStats extends React.Component {
    render() {
        return (
            <div className="container shortStats">
                <ShortStatsHeader />
                <ShortStatsInfo />
            </div>
        )
    }
};

