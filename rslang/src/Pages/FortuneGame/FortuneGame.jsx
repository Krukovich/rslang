import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import StartScreen from './StartScreen/StartScreen';
import EndScreen from './EndScreen/EndScreen';

import './FortuneGame.scss';

import right1 from './assets/AudioSamples/right/right1.mp3'
import right2 from './assets/AudioSamples/right/right2.mp3'
import right3 from './assets/AudioSamples/right/right3.mp3'
import right4 from './assets/AudioSamples/right/right4.ogg'
import right5 from './assets/AudioSamples/right/right5.mp3'
import wrong1 from './assets/AudioSamples/wrong/wrong1.mp3'
import wrong2 from './assets/AudioSamples/wrong/wrong2.mp3'
import wrong3 from './assets/AudioSamples/wrong/wrong3.mp3'
import wrong4 from './assets/AudioSamples/wrong/wrong4.mp3'
import wrong5 from './assets/AudioSamples/wrong/wrong5.mp3'
import wrong6 from './assets/AudioSamples/wrong/wrong6.mp3'

class FortuneGame extends Component {
    constructor() {
        super();
        this.state = {
            speak: false,
            gameStarted: false,
            gameEnded: false,
            score: 0,
            mistakeCount: 0,
            words: 0,
            alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            alphabetCheck: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            cursed: [],
            engWordArr: [],
            engWordArrCheck: [],
            rusWordArr: [],
            dialogue: 'Угадывайте!',
            continue: false,
            audio: 0,
        }
        this.engWordRef = React.createRef();
    }

    async getWords(difficulty = 0) {
        const responce = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?group=${difficulty}`);
        const json = await responce.json();
        this.setState({
            words: json,
        })
        return json;
    }

    loadWord = props => {
        const defaultArr = this.state.words.slice(0);
        const cursed = this.state.cursed.slice(0);

        const randomNum = Math.floor(Math.random() * Math.floor(defaultArr.length));

        cursed.push(randomNum);

        this.setState({
            cursed: cursed,
        })

        const wordObj = this.state.words[randomNum]

        this.setState({
            rusWordArr: wordObj.wordTranslate.toUpperCase().split(''),
            engWordArr: wordObj.word.toUpperCase().split(''),
            engWordArrCheck: wordObj.word.toUpperCase().split(''),
        });
    }

    alphabetCheckHandler = (event) => {
        const index = this.state.alphabetCheck.indexOf(event.target.textContent);
        let alph = this.state.alphabetCheck.split('');
        alph[index] = 0;
        alph = alph.join('');

        this.setState({
            alphabetCheck: alph,
        })
    }

    roundEndHandler = () => {
        for (let char of this.state.engWordArrCheck) {
            if (char !== 0) return
        }

        this.setState({
            continue: true
        })
    }

    letterClickHandler = (event) => {
        if (event.target.className.includes('Fortune-Letter_inactive')) return

        this.alphabetCheckHandler(event);

        // event.target.classList.add('Fortune-Letter_inactive');

        if (this.state.engWordArr.includes(event.target.textContent)) {
            this.rightAnswerHandler(event);
        } else {
            this.wrongAnswerHandler(event);
        }
    }

    rightAnswerHandler = props => {
        const word = this.state.engWordArrCheck;
        const dialogueVariants = ['Абсолютно верно!',
            'Есть такая буква!', 'Правильно!', 'Это гениально!', 'Вопрос для детского сада!'];
        const audioVariants = [right1, right2, right3, right4, right5];

        for (let i = 0; i < word.length; i += 1) {
            if (props.target.textContent === word[i]) {
                word[i] = 0;

                this.setState((prevState) => {
                    return {
                        score: prevState.score + 100,
                        engWordArrCheck: word
                    }
                });
            }
        }
        this.setState((prevState) => {
            return {
                dialogue: dialogueVariants[Math.floor(Math.random() * Math.floor(dialogueVariants.length))],
                speak: true,
            }
        });

        const audio = new Audio(audioVariants[Math.floor(Math.random() * Math.floor(audioVariants.length))]);
        audio.play();

        setTimeout(() => {
            this.setState({
                speak: false,
            })
        }, 900)

        this.roundEndHandler();
    }

    cellClassHandler = (filler = [], cellClass, checkArray) => {
        let content = [<td></td>];
        for (let i = 1; i < 15; i += 1) {

            if (typeof filler[i - 1] === 'string') {
                content.push(<td className={checkArray[i - 1] === 0 ? null : cellClass}>{filler[i - 1]}</td>)
            } else {
                content.push(<td>{filler[i - 1]}</td>)
            }
        }
        return content
    }

    wrongAnswerHandler = props => {
        const dialogueVariants = ['Извините, ошибка!',
            'Нет такой буквы!', 'Откройте букву... но в другом слове', 'Вы отвечаете не подумав!'];
        const audioVariants = [wrong1, wrong2, wrong3, wrong4, wrong5, wrong6];

        this.setState((prevState) => {
            return {
                dialogue: dialogueVariants[Math.floor(Math.random() * Math.floor(dialogueVariants.length))],
                speak: true,
                mistakeCount: prevState.mistakeCount + 1,
            }
        });

        if (this.state.mistakeCount === 2) {
            this.setState({
                gameEnded: true,
            })
        }

        const audio = new Audio(audioVariants[Math.floor(Math.random() * Math.floor(audioVariants.length))]);
        audio.play();

        setTimeout(() => {
            this.setState({
                speak: false,
            })
        }, 900)
    }

    drawCells = (filler = [], cellClass) => {
        let content = [<td></td>];
        for (let i = 1; i < 15; i += 1) {

            if (typeof filler[i - 1] === 'string') {
                content.push(<td className={cellClass}>{filler[i - 1]}</td>)
            } else {
                content.push(<td>{filler[i - 1]}</td>)
            }

        }
        return content
    }

    drawLetters = (checkArr) => {
        let content = [];
        const alphabet = this.state.alphabet.split('');
        const alphCheck = checkArr.split('');
        alphabet.map((a, i) => {
            content.push(<td
                onClick={this.letterClickHandler}
                className={alphabet[i] !== alphCheck[i] ? "Fortune-Letter Fortune-Letter_inactive" : "Fortune-Letter"}
                key={'letter' + i}
            >{alphabet[i]}</td>)
        })
        return content
    }

    start = props => {
        try {
            this.loadWord();

            this.setState({
                gameStarted: true,
                dialogue: 'Угадывайте!',
                alphabetCheck: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                continue: false,
                mistakeCount: 0,
                gameEnded: false,
            })
        } catch {
            alert('Please wait for the words to load')
        }
    }

    restart = () => {
        this.loadWord();

        this.setState({
            dialogue: 'Угадывайте!',
            alphabetCheck: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            continue: false,
            mistakeCount: 0,
            gameEnded: false,
            score: 0,
        })
    }

    componentDidMount() {
        this.getWords();
    }

    addYakubClass() {
        const buttonClass = ['Fortune-Yakub', 'mb-2', 'mt-2'];
        if (this.state.speak) {
            buttonClass.push('Fortune-Yakub_speak');
        }
        return buttonClass.join(' ')
    }

    render() {
        if (!this.state.gameStarted) {
            return (
                <div className="Fortune container Fortune-Startscreen pt-5">
                    <div className="row">
                        <div className="md-col-12 w-100 p-3 d-flex flex-column justify-content-center align-items-center">
                            <div className="d-flex align-items-center">
                                <span className="mr-2">Сложность:</span>
                                <select ref={this.selectRef} onClick={this.difficultyHandler} className="d-inline-block">
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">4</option>
                                    <option value="4">5</option>
                                    <option value="5">6</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <StartScreen gameStart={this.start} />
                </div>
            )
        } else if (this.state.gameEnded) {
            return <EndScreen
                score={this.state.score}
                restart={this.restart}
            />
        } else {
            return (
                <div className="Fortune container pt-5">
                    <div className="Fortune-Scoreboard row p-2">
                    </div>
                    <div className="Fortune-Playboard row h-75 p-2">
                        <div className="col-md-2 d-flex justify-content-center align-items-center flex-column">
                            <div className="Fortune-Dialogue DialogueBar">
                                <div className="DialogueBar-Box">{this.state.dialogue}</div>
                                <div className="DialogueBar-Triangle"></div>
                            </div>
                            <div className={this.addYakubClass()}></div>
                            <Button onClick={() => { this.setState({ gameEnded: true }) }} className="Fortune-Btn_exit p-0 mb-1">В музей поля чудес (закончить)</Button>
                            <Button onClick={this.start} variant="success" className={this.state.continue === true ? "Fortune-Btn_next p-1 Fortune-Btn_next_active" : "Fortune-Btn_next p-1"}>Следующее слово</Button>
                        </div>
                        <div className="col-md-8">
                            <div className="Fortune-Board w-100 h-100">
                                <table className="Fortune-Table">
                                    <tbody>
                                        <tr>
                                            {this.drawCells()}
                                        </tr>
                                        <tr ref={this.engWordRef} className="Fortune-PlayRow">
                                            {this.cellClassHandler(this.state.engWordArr, 'Fortune-Cell_closed', this.state.engWordArrCheck)}
                                        </tr>
                                        <tr>
                                            {this.drawCells()}
                                        </tr>
                                        <tr>
                                            {this.drawCells()}
                                        </tr>
                                        <tr className="Fortune-PlayRowTranslate">
                                            {this.drawCells(this.state.rusWordArr)}
                                        </tr>
                                        <tr>
                                            {this.drawCells()}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="Fortune-Letters mt-2 d-flex">
                                {this.drawLetters(this.state.alphabetCheck)}
                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center flex-column">
                            <h3 className="Fortune-Score">{this.state.score}</h3>
                            <div className="Fortune-Player mt-3"></div>
                            <div className="Fortune-Progressbar w-100 d-flex justify-content-center align-items-center">
                                <div className="progress w-100 ml-1 mr-1 mt-3">
                                    <div className="progress-bar bg-danger" style={{ width: (100 - this.state.mistakeCount * 33) + '%' }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
        }
    }
}

function mapStateToProps(state) {
    console.log('redux state', state)
    return {
        difficulty: state.sprintGame.difficulty
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeDiff: number => dispatch({ type: 'CHANGE_DIFF', payload: number })
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(FortuneGame);
export default FortuneGame
