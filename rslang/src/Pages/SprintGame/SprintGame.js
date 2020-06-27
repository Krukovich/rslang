import React, { Component } from 'react';
import SprintCard from '../../Components/SprintCard/SprintCard';
import StartScreen from './StartScreen/StartScreen';
import EndScreen from './EndScreen/EndScreen';
import './SprintGame.scss';

class SprintGame extends Component {
    constructor() {
        super();
        this.state = {
            gameStarted: false,
            gameEnded: false,
            counter: 60,
            score: 0,
            maxStreak: 0,
            modifier: 1,
            mixedArr: 0,
            activeQuestion: 0,
            mistakeCount: 0,
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
                },
                {
                    eng: 'Flex',
                    rus: 'Отдыхать от души'
                },
                {
                    eng: 'Dance',
                    rus: 'Танцевать'
                },
                {
                    eng: 'Read',
                    rus: 'Петь'
                },
                {
                    eng: 'Train',
                    rus: 'Тренироваться'
                },
            ],
        }
        this.rightBtnRef = React.createRef();
        this.wrongBtnRef = React.createRef();
    }

    mixWords = () => {
        const defaultArr = this.state.words.slice(0);
        let mixedArr = [];
        defaultArr.map((a, i) => {
            if (Math.random() > 0.5) {
                let firstPart = Math.floor(Math.random() * Math.floor(defaultArr.length));
                let secondPart = Math.floor(Math.random() * Math.floor(defaultArr.length));
                let isTrue = true;

                if (firstPart === secondPart) {
                    isTrue = true;
                } else {
                    isTrue = false;
                }

                mixedArr.push({
                    firstPartEng: defaultArr[firstPart].eng,
                    secondPartRus: defaultArr[secondPart].rus,
                    isTrue: isTrue
                });
            } else {
                mixedArr.push({
                    firstPartEng: defaultArr[i].eng,
                    secondPartRus: defaultArr[i].rus,
                    isTrue: true
                });
            }

        })
        this.setState({
            mixedArr: mixedArr
        });
    }

    timer = () => {
        const timer = setInterval(() => {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter - 1,
                }
            });

            if (!this.state.counter) {
                clearInterval(timer);
            }
        }, 1000);
    }

    buttonClickHandler = event => {
        let isRightButton = event.currentTarget.className.includes('SprintCard-Button_success');

        if (isRightButton === this.state.mixedArr[this.state.activeQuestion].isTrue) {
            this.rightAnswerHandler();
        } else {
            this.wrongAnswerHandler();
        }
    }

    rightAnswerHandler = () => {
        this.setState((prevState) => {
            return {
                activeQuestion: prevState.activeQuestion + 1,
                maxStreak: prevState.maxStreak + 1,
                score: prevState.score + 10 * prevState.modifier,
            }
        });

        if (this.state.maxStreak === 3) {
            this.setState((prevState) => {
                return {
                    modifier: prevState.modifier * 2,
                    maxStreak: 0
                }
            });
        }

    }

    wrongAnswerHandler = () => {
        this.setState((prevState) => {
            return {
                activeQuestion: prevState.activeQuestion + 1,
                mistakeCount: prevState.mistakeCount + 1,
                modifier: 1,
                maxStreak: 0,
            }
        });

        if (this.state.mistakeCount === 2) {
            this.setState({
                gameEnded: true,
            })
        }
    }

    gameEndHandler = () => {
        if (this.state.activeQuestion === this.state.mixedArr.length) {
            this.setState({
                gameEnded: true,
            })
        }
    }

    keyPushHandler = props => {
        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
                this.rightBtnRef.current.focus();
                if (this.state.mixedArr[this.state.activeQuestion].isTrue) {
                    this.rightAnswerHandler();
                } else {
                    this.wrongAnswerHandler();
                }
            } else if (event.code === 'KeyD' || event.code === 'ArrowRight') {
                this.wrongBtnRef.current.focus();
                if (!this.state.mixedArr[this.state.activeQuestion].isTrue) {
                    this.rightAnswerHandler();
                } else {
                    this.wrongAnswerHandler();
                }
            }
        });
    }

    gameStart = props => {
        this.timer();
        this.keyPushHandler();
        this.setState(
            {
                gameStarted: true,
                gameEnded: false,
                // counter: 60,
                // score: 0,
                // maxStreak: 0,
                // modifier: 1,
                // activeQuestion: 0,
                // mistakeCount: 0,
            }
        )
    }

    componentDidMount() {
        this.mixWords();
    }

    render() {
        if (!this.state.gameStarted) {
            return <StartScreen gameStart={this.gameStart} />
        } else if (this.state.gameEnded) {
            return <EndScreen
                score={this.state.score}
                restart={this.gameStart}
            />
        } else {
            return (
                <div className="Sprint container mt-5">
                    <div className="Sprint-Scoreboard row p-2">
                        <div className="col-md-12 d-flex justify-content-center">
                            <h3 className="Sprint-Score text-success">{this.state.score}</h3>
                        </div>
                    </div>
                    <div className="Sprint-Playboard row h-75">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <SprintCard
                                rightBtnRef={this.rightBtnRef}
                                wrongBtnRef={this.wrongBtnRef}
                                mistakeCount={this.state.mistakeCount}
                                eng={this.state.mixedArr[this.state.activeQuestion].firstPartEng}
                                rus={this.state.mixedArr[this.state.activeQuestion].secondPartRus}
                                onclick={this.buttonClickHandler}
                            />
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="Sprint-Tools row p-2 mt-1">
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
}

export default SprintGame
