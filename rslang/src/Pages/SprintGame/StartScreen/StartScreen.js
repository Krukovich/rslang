import React from 'react';
// import './EndScreen.scss';
import { Button } from 'react-bootstrap';

const StartScreen = (props) => {
    return (
        <div className="row">
            <div className="md-col-12 p-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-4">Sprint</h1>
                <p className="mb-4 text-center">How to play: you are given a word and a translation. If they match click 'Yes', if not - click 'No'. The streak of 4 right answers doubles your reward. 3 mistakes lead to game over.</p>
                <p className="mb-4">Good Luck!</p>
                <Button onClick={props.gameStart} variant={'primary'}>
                    START
                </Button>
            </div>
        </div>
    )
}

export default StartScreen