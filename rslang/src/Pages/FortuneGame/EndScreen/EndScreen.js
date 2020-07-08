import React from 'react';
import './EndScreen.scss';
import { Button } from 'react-bootstrap';

const EndScreen = (props) => {
    return (
        <div className="Fortune Fortune-Endscreen container mt-5">
            <div className="row">
                <div className="md-col-12 w-100 p-5 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="mb-4">Игре конец!</h1>
                    <p>Ваш счёт: {props.score}</p>
                    <div className="d-flex mt-4">
                        <Button onClick={props.restart} className="mr-2">Заново</Button>
                        <Button href='MainPage'>Главное меню</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EndScreen
