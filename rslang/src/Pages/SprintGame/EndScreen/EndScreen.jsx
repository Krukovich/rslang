import React, { Component } from 'react';
import './EndScreen.scss';
import { Translation } from 'react-i18next';
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
                <div className="Sprint-Endscreen row">
                    <div className="md-col-12 w-100 pt-2 pb-5 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="mb-4">{<Translation>
                            {
                                (t) => <>{t('sprintGame.5')}</>
                            }
                        </Translation>}
                        </h1>
                        <p>{<Translation>
                            {
                                (t) => <>{t('sprintGame.6')}</>
                            }
                        </Translation>} {this.props.score}</p>
                        <div className="d-flex mt-4">
                            <Button onClick={this.props.restart} className="mr-2">{<Translation>
                                {
                                    (t) => <>{t('sprintGame.7')}</>
                                }
                            </Translation>}</Button>
                            <Link className="SprintBtn-Main btn btn-primary rounded" to={'/mini-games'}>{<Translation>
                                {
                                    (t) => <>{t('sprintGame.11')}</>
                                }
                            </Translation>}</Link>
                        </div>
                    </div>
                </div>
                <div className='row w-100 d-flex justify-content-center'>
                    <div className="SprintStats md-col-4 p-2">
                        <div className='SprintStats-iknow mb-2 w-100'>
                            <div className="SprintStats-Title">
                                <div>
                                    {<Translation>
                                        {
                                            (t) => <>{t('sprintGame.9')}</>
                                        }
                                    </Translation>}
                                </div>
                                <div className="SprintStats-Title_iknow">{this.props.rightAnswers.length}</div>
                            </div>
                            <div className="SprintStats-Separator"></div>
                            {this.drawLocalStats(this.props.rightAnswers, 'iknow')}
                        </div>
                        <div className='SprintStats-idontknow w-100'>
                            <div className="SprintStats-Title">
                                <div>{<Translation>
                                    {
                                        (t) => <>{t('sprintGame.10')}</>
                                    }
                                </Translation>}
                                </div>
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
