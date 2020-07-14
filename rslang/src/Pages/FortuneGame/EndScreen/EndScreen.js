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
                <FontAwesomeIcon className="FortuneEndscreen-Listen mr-2" onClick={() => this.listenWord(arr[i].audio)} icon={faVolumeUp} />
                {arr[i].engWord} - {arr[i].rusWord}
            </div>)
        }
        return content
    }

    render() {
        return (
            <React.Fragment>
                <div className="row Fortune-Endscreen">
                    <div className="md-col-12 w-100 p-5 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="mb-4">{<Translation>
                            {
                                (t) => <>{t('fortuneGame.5')}</>
                            }
                        </Translation>}</h1>
                        <p>{<Translation>
                            {
                                (t) => <>{t('fortuneGame.6')}</>
                            }
                        </Translation>} {this.props.score}</p>
                        <div className="d-flex mt-4">
                            <Button onClick={this.props.restart} className="mr-2">{<Translation>
                                {
                                    (t) => <>{t('fortuneGame.7')}</>
                                }
                            </Translation>}</Button>
                            <Link className="FotuneBtn-Main btn btn-primary rounded" to={'/main-page'}>{<Translation>
                                {
                                    (t) => <>{t('fortuneGame.8')}</>
                                }
                            </Translation>}</Link>
                        </div>
                    </div>
                </div>
                <div className='row w-100 d-flex justify-content-center'>
                    <div className="FortuneStats md-col-4 p-2">
                        <div className='FortuneStats-iknow mb-2 w-100'>
                            <div className="FortuneStats-Title">
                                <div>{<Translation>
                                    {
                                        (t) => <>{t('fortuneGame.9')}</>
                                    }
                                </Translation>}</div>
                                <div className="FortuneStats-Title_iknow bg-primary">{this.props.answers.length}</div>
                            </div>
                            <div className="FortuneStats-Separator"></div>
                            {this.drawLocalStats(this.props.answers, 'iknow')}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EndScreen
