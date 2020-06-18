import React from 'react';
import './shortStats.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import english from './english.gif';

// const dataInfo = {
//     total: 50,
//     right: 75,
//     newWords: 43,
//     rightInARow: 15,
// }

const ShortStatsHeader = () => {
    return (
        <div className="row align-items-center flex-column shortStatsHeader">
            <img src={english} alt="stats pic" />
            <h1>Серия завершена</h1>
        </div>
    )
}

const ShortStatsInfo = (props) => {
    const { total, right, newWords, rightInARow } = props; 
    return (
        <ul className="row align-items-center flex-column shortStatsInfo">
            <li className="shortStatsInfo-item d-flex"><span><FontAwesomeIcon icon={ faDragon } /> Карточек завершено:  </span><span>{total}</span></li>
            <li className="shortStatsInfo-item d-flex"><span><FontAwesomeIcon icon={ faCrown } /> Правильные ответы: </span> <span>{right}%</span></li>
            <li className="shortStatsInfo-item d-flex"><span><FontAwesomeIcon icon={ faCartPlus } /> Новые слова: </span> <span>{newWords}</span> </li>
            <li className="shortStatsInfo-item d-flex"><span><FontAwesomeIcon icon={ faUserGraduate } /> Правильных ответов подряд: </span> <span>{rightInARow}</span> </li>
        </ul>
    )
}
export default class ShortStats extends React.Component {
    constructor(props) {
        super(props);
        this.totalCards = props.total;
        this.rightAnswer = props.right;
        this.newWords = props.newWords;
        this.correctRow = props.rightInARow;
        // console.log(props.total, props.right, props.newWords, props.rightInARow);
    }
    // 
    render() {
        return (
            <div className="container shortStats">
                <ShortStatsHeader />
                <ShortStatsInfo total={this.totalCards} right={this.rightAnswer} newWords={this.newWords} rightInARow={this.correctRow} />
            </div>
        )
    }
};

