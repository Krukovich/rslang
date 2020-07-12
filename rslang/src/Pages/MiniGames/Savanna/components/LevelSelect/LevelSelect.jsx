import React from 'react';
// import './LevelSelect.scss';
import { Button } from 'react-bootstrap';

const LevelSelect = (props) => {
    return (
        <div className="Savanna-Levelselect row text-white">
            <div className="md-col-12 w-100 p-3 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex align-items-center">
                    <span className="mr-2">Сложность:</span>
                    <select
                        ref={props.difficultyRef}
                        onClick={props.difficultyHandler}
                        className="Savanna-Difficulty d-inline-block mr-2"
                    >
                        {props.optionSpawner(5, 'diff')}
                    </select>
                    <span className="mr-2">Уровень:</span>
                    <select
                        ref={props.lvlRef}
                        onClick={props.levelHandler}
                        className="Savanna-Lvl d-inline-block"
                    >
                        {props.optionSpawner(29, 'lvl')}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default LevelSelect
