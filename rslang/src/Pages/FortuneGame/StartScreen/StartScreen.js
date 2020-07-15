import React from 'react';
import './StartScreen.scss';
import { Translation } from 'react-i18next';
import { Button } from 'react-bootstrap';

const StartScreen = (props) => {
    return (
        <div className="row Fortune-Startscreen">
            <div className="md-col-12 w-100 p-3 d-flex flex-column justify-content-center align-items-center">
                <div className="FortuneStartscreen-Logo"></div>
                <p className="mb-1 text-center mt-1">{<Translation>
                    {
                        (t) => <>{t('fortuneGame.1')}</>
                    }
                </Translation>}</p>
                <div className="Fortune-Startscreen_btns">
                    <Button onClick={props.gameStart} variant={'primary'}>
                        {<Translation>
                            {
                                (t) => <>{t('fortuneGame.2')}</>
                            }
                        </Translation>}
                    </Button>
                    <Button variant={'primary'}>
                        {<Translation>
                            {
                                (t) => <>{t('sprintGame.12')}</>
                            }
                        </Translation>}
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default StartScreen
