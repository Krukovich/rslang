import React from 'react';
import { Button } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import './LevelSelect.scss'

const LevelSelect = (props) => {
    return (
        <div className="Audiocall-Levelselect LevelselectScreen row text-white">
            <div className="md-col-12 w-100 p-3 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex align-items-center">
                    <span className="mr-2">
                        {<Translation>
                            {
                                (t) => <>{t('difficultySelect.1')}</>
                            }
                        </Translation>}
                    </span>
                    <select
                        ref={props.difficultyRef}
                        onClick={props.difficultyHandler}
                        className="Audiocall-Difficulty d-inline-block mr-2"
                    >
                        {props.optionSpawner(5, 'diff')}
                    </select>
                    <span className="mr-2">
                        {<Translation>
                            {
                                (t) => <>{t('difficultySelect.1')}</>
                            }
                        </Translation>}
                    </span>
                    <select
                        ref={props.lvlRef}
                        onClick={props.levelHandler}
                        className="Audiocall-Lvl d-inline-block"
                    >
                        {props.optionSpawner(29, 'lvl')}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default LevelSelect
