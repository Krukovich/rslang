import React from 'react';
import './StartScreen.scss';
import { Button } from 'react-bootstrap';

const StartScreen = (props) => {
    return (
        <div className="row Fortune-Startscreen">
            <div className="md-col-12 p-3 d-flex flex-column justify-content-center align-items-center">
                <div className="FortuneStartscreen-Logo"></div>
                <p className="mb-4 text-center mt-3">Как играть: дан перевод слова. Нужно составить слово на английском языке из алфавита в нижней части экрана.
                3 ошибки в раунде ведут к поражению.</p>
                <Button onClick={props.gameStart} variant={'primary'}>
                    НАЧАТЬ
                </Button>
            </div>
        </div >
    )
}

export default StartScreen
