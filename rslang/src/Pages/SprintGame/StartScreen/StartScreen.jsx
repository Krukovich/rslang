import React from 'react';
import './StartScreen.scss';
import { Button } from 'react-bootstrap';
import { Translation } from 'react-i18next';

const StartScreen = (props) => {
    return (
        <div className="Sprint-Startscreen row">
            <div className="md-col-12 w-100 p-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-4">
                    {<Translation>
                        {
                            (t) => <>{t('sprintGame.1')}</>
                        }
                    </Translation>}</h1>
                <p className="mb-4 text-center">
                    {<Translation>
                        {
                            (t) => <>{t('sprintGame.2')}</>
                        }
                    </Translation>}
                </p>
                <p className="mb-4">
                    {<Translation>
                        {
                            (t) => <>{t('sprintGame.3')}</>
                        }
                    </Translation>}
                </p>
                <div className="Sprint-Startscreen_btns">
                    <Button onClick={props.gameStart} variant={'primary'}>
                        {<Translation>
                            {
                                (t) => <>{t('sprintGame.4')}</>
                            }
                        </Translation>}
                    </Button>
                    <Button onClick={props.startWithUserwords} variant={'primary'}>
                        {<Translation>
                            {
                                (t) => <>{t('sprintGame.12')}</>
                            }
                        </Translation>}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default StartScreen
