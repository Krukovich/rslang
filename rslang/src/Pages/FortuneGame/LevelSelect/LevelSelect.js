import React from 'react';
import './LevelSelect.scss';
import { Translation } from 'react-i18next';

const LevelSelect = (props) => {
    return (
        <div className="row LevelselectScreen Fortune-LevelSelect">
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
                        className="Fortune-Difficulty d-inline-block mr-2"
                    >
                        {props.optionSpawner(5, 'diff')}
                    </select>
                    <span className="mr-2">{<Translation>
                        {
                            (t) => <>{t('difficultySelect.2')}</>
                        }
                    </Translation>}</span>
                    <select
                        ref={props.lvlRef}
                        onClick={props.levelHandler}
                        className="Fortune-Lvl d-inline-block"
                    >
                        {props.optionSpawner(29, 'lvl')}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default LevelSelect
