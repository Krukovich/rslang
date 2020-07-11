import React, { Component } from 'react';
import './EndScreen.scss';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

class EndScreen extends Component {
    constructor() {
        super();
    }

    listenWord = (audio) => {
        const audioSample = new Audio(`https://raw.githubusercontent.com/krukovich/rslang-data/master/${audio}`);
        audioSample.play();
    }

    drawLocalStats = (arr, cellKey) => {
        let content = [];
        for (let i = 0; i < arr.length; i += 1) {
            content.push(<div key={cellKey + i}>
                <FontAwesomeIcon className="SprintEndscreen-Listen mr-2" onClick={() => this.listenWord(arr[i].audio)} icon={faVolumeUp} />
                {arr[i].firstPartEng} - {arr[i].firstPartRus}
            </div>)
        }
        return content
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="md-col-12 w-100 pt-2 pb-5 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="mb-4">Игре конец!</h1>
                        <p>Твой счёт: {this.props.score}</p>
                        <div className="d-flex mt-4">
                            <Button onClick={this.props.restart} className="mr-2">ЕЩЁ РАЗ</Button>
                            <Link className="SprintBtn-Main btn bg-primary rounded" to={'/main-page'}>НА ГЛАВНУЮ</Link>
                        </div>
                    </div>
                </div>
                <div className='row w-100 d-flex justify-content-center'>
                    <div className="SprintStats md-col-4 p-2">
                        <div className='SprintStats-iknow mb-2 w-100'>
                            <div className="SprintStats-Title">
                                <div>Правильно</div>
                                <div className="SprintStats-Title_iknow">{this.props.rightAnswers.length}</div>
                            </div>
                            <div className="SprintStats-Separator"></div>
                            {this.drawLocalStats(this.props.rightAnswers, 'iknow')}
                        </div>
                        <div className='SprintStats-idontknow w-100'>
                            <div className="SprintStats-Title">
                                <div>С ошибкой</div>
                                <div className="SprintStats-Title_idontknow">{this.props.wrongAnswers.length}</div>
                            </div>
                            <div className="SprintStats-Separator"></div>
                            {this.drawLocalStats(this.props.wrongAnswers, 'idontknow')}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EndScreen