import React from 'react';
import './StartScreen.scss';
import { Button } from 'react-bootstrap';

const StartScreen = (props) => {
    return (
        <div className="row w-100 FortuneStartscreen">
            <div className="md-col-12 w-100 p-3 d-flex flex-column justify-content-center align-items-center">
                <div className="FortuneStartscreen-Logo"></div>
                {/* <h1 className="mb-4">Поле чудес</h1> */}
                <p className="mb-4 text-center mt-3">Как играть: дан перевод слова. Нужно составить слово на английском языке из алфавита в нижней части экрана.
                3 ошибки в раунде ведут к поражению.</p>
                {/* <p className="mb-4">Удачи!</p> */}
                <Button onClick={props.gameStart} variant={'primary'}>
                    START
                </Button>
            </div>
        </div >
    )
}

export default StartScreen