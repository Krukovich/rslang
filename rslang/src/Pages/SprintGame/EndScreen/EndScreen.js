import React from 'react';
// import './EndScreen.scss';
import { Button } from 'react-bootstrap';

const EndScreen = (props) => {
    return (
        <div className="Sprint container mt-5">
            <div className="row">
                <div className="md-col-12 w-100 p-5 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="mb-4">Game Over!</h1>
                    <p>Твой счёт: {props.score}</p>
                    <div className="d-flex mt-4">
                        <Button onClick={props.restart} className="mr-2">ЗАНОВО</Button>
                        <Button href='MainPage'>НА ГЛАВНУЮ</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EndScreen