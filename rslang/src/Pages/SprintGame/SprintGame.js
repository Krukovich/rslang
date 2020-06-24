import React, { Component } from 'react';
import SprintCard from '../../Components/SprintCard/SprintCard';
import EndScreen from './EndScreen/EndScreen';
import './SprintGame.scss';

class SprintGame extends Component {
    constructor() {
        super();
        this.state = {
            counter: 60,
            score: 0,
            maxString: 0,
            modifier: 1,
            isTrue: true,
            words: [
                {
                    eng: 'Whisper',
                    rus: 'Говорить шёпотом'
                },
                {
                    eng: 'Scream',
                    rus: 'Кричать'
                },
                {
                    eng: 'Sing',
                    rus: 'Петь'
                }
            ],
        }
    }

    mixWords = () => {
        if (Math.random() > 0.5) {

        }
    }

    timer = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        });
    }

    buttonClickHandler = (event, value = null) => {
        let isRightButton = event.currentTarget.className.includes('SprintCard-Button_success');

        if (isRightButton === this.state.isTrue) {
            this.rightAnswerHandler();
        } else {
            this.wrongAnswerHandler();
        }
    }

    rightAnswerHandler = () => {
        this.setState((prevState) => {
            return {
                maxString: prevState.maxString + 1,
                score: prevState.score + 10 * prevState.modifier
            }
        });

        if (this.state.maxString === 3) {
            this.setState((prevState) => {
                return {
                    modifier: prevState.modifier * 2,
                    maxString: 0
                }
            });
        }
    }

    wrongAnswerHandler = () => {
        this.setState({
            modifier: 1,
            maxString: 0
        });
    }

    componentDidMount() {
        const timer = setInterval(() => {
            this.timer();

            if (!this.state.counter) {
                clearInterval(timer);
                // this.endGame();
            }
        }, 1000);

        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
                if (this.state.isTrue) {
                    this.rightAnswerHandler();
                } else {
                    this.wrongAnswerHandler();
                }
            } else if (event.code === 'KeyD' || event.code === 'ArrowRight') {
                if (!this.state.isTrue) {
                    this.rightAnswerHandler();
                } else {
                    this.wrongAnswerHandler();
                }
            }
        });
    }

    // endGame = () => {
    //     return (
    //         <EndScreen />
    //     )
    // }

    render() {
        return (
            <div className="Sprint container">
                <div className="Sprint-Scoreboard row p-2 mb-2">
                    <div className="col-md-12 d-flex justify-content-center">
                        <h3 className="Sprint-Score text-success">{this.state.score}</h3>
                    </div>
                </div>
                <div className="Sprint-Playboard row h-75">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <SprintCard
                            eng={'Whisper'}
                            rus={'Говорить шёпотом'}
                            onclick={this.buttonClickHandler}
                        />
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="Sprint-Tools row p-2 mt-2">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <h3 className="Sprint-Timer text-success">{this.state.counter}</h3>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div >
        )
    }
}

export default SprintGame
