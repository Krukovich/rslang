import React from 'react';
// import './EndScreen.scss';
import { Button } from 'react-bootstrap';

const StartScreen = (props) => {
    return (
        <div className="row">
            <div className="md-col-12 p-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-4">Спринт</h1>
                <p className="mb-4 text-center">Как играть: дано слово на английском и его перевод. Если они совпадают, нажми "Yes", если нет, нажми "No". Комбо из четырёх правильных ответов удваивает награду. Три ошибки ведут к проигрышу.</p>
                <p className="mb-4">Удачи!</p>
                <Button onClick={props.gameStart} variant={'primary'}>
                    НАЧАТЬ
                </Button>
            </div>
        </div>
    )
}

export default StartScreen
// Нow to play: you are given a word and a translation. If they match click 'Yes', if not - click 'No'. The streak of 4 right answers doubles your reward. 3 mistakes lead to game over.
