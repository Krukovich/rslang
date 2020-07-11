import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { fetchAPI } from "../../Components/Tools/fetchAPI";

import StartScreen from './StartScreen/StartScreen';
import EndScreen from './EndScreen/EndScreen';
import LevelSelect from './LevelSelect/LevelSelect';

import './FortuneGame.scss';

import right1 from './assets/AudioSamples/right/right1.mp3'
import right2 from './assets/AudioSamples/right/right2.mp3'
import right3 from './assets/AudioSamples/right/right3.mp3'
import right4 from './assets/AudioSamples/right/right4.ogg'
import right5 from './assets/AudioSamples/right/right5.mp3'
import right6 from './assets/AudioSamples/right/right6.mp3'
import right7 from './assets/AudioSamples/right/right7.mp3'
import right8 from './assets/AudioSamples/right/right8.mp3'
import wrong1 from './assets/AudioSamples/wrong/wrong1.mp3'
import wrong2 from './assets/AudioSamples/wrong/wrong2.mp3'
import wrong3 from './assets/AudioSamples/wrong/wrong3.mp3'
import wrong4 from './assets/AudioSamples/wrong/wrong4.mp3'
import wrong5 from './assets/AudioSamples/wrong/wrong5.mp3'
import wrong6 from './assets/AudioSamples/wrong/wrong6.mp3'
import wrong7 from './assets/AudioSamples/wrong/wrong7.mp3'
import wrong8 from './assets/AudioSamples/wrong/wrong8.ogg'
import wrong9 from './assets/AudioSamples/wrong/wrong9.mp3'
import win1 from './assets/AudioSamples/win/win1.mp3'
import win2 from './assets/AudioSamples/win/win2.mp3'
import win3 from './assets/AudioSamples/win/win3.mp3'
import win4 from './assets/AudioSamples/win/win4.mp3'
import win5 from './assets/AudioSamples/win/win5.mp3'
import lose2 from './assets/AudioSamples/lose/lose2.mp3'

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
            currentRound: 0,
            answers: [],
            difficulty: localStorage.getItem('fortuneDifficulty') === null ? 0 : localStorage.getItem('fortuneDifficulty'),
            level: localStorage.getItem('fortuneLvl') === null ? 0 : localStorage.getItem('fortuneLvl'),
        }
        this.engWordRef = React.createRef();
        this.difficultyRef = React.createRef();
        this.lvlRef = React.createRef();
        this.audio = 0;
    }

    async getWords(difficulty = this.state.difficulty, level = this.state.level) {
        console.log(difficulty, level)
        const responce = await fetch(
            `https://afternoon-falls-25894.herokuapp.com/words?group=${difficulty}&page=${level}`
        );
        const json = await responce.json();
        this.setState({
            words: json,
        })
        return json;
    }

    generateRandomNum = (cursed, defaultArr) => {
        let randomNum = Math.floor(Math.random() * Math.floor(defaultArr.length));
        if (cursed.includes(randomNum)) {
            return this.generateRandomNum(cursed, defaultArr);
        } else {
            return randomNum
        }
    }

    loadWord = props => {
        const cursed = this.state.cursed.slice(0);

        const randomNum = this.generateRandomNum(this.state.cursed, this.state.words);
        cursed.push(randomNum)
        this.setState({
            cursed: cursed,
        })

        const wordObj = this.state.words[randomNum]

        const rusWord = wordObj.wordTranslate;
        const engWord = wordObj.word;
        const audio = wordObj.audio;

        this.setState({
            rusWordArr: rusWord.toUpperCase().split(''),
            engWordArr: engWord.toUpperCase().split(''),
            engWordArrCheck: engWord.toUpperCase().split(''),
            audio: audio,
        });

        this.updateLocalStats({ engWord, rusWord, audio }, this.state.answers);
    }

    updateLocalStats = (word, arr) => {
        const wordArr = arr;
        wordArr.push(word);

        this.setState({
            arr: wordArr
        })
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
        const audioVariants = [win1, win2, win3, win4, win5];
        const dialogueVariants = ['И у нас победитель!!!',
            'Поразительно! Это победа!', 'Победа!', 'Всё отгадано верно!!'];

        for (let char of this.state.engWordArrCheck) {
            if (char !== 0) return
        }

        this.setState({
            dialogue: dialogueVariants[Math.floor(Math.random() * Math.floor(dialogueVariants.length))],
            continue: true,
        })

        this.audioHandler(audioVariants);
    }

    letterClickHandler = (event) => {
        if (event.target.className.includes('Fortune-Letter_inactive')) return

        this.alphabetCheckHandler(event);

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
        const audioVariants = [right1, right2, right3, right4, right5, right6, right7, right8];

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

        this.audioHandler(audioVariants);
        this.yakubShutHandler();
        this.roundEndHandler();
    }

    wrongAnswerHandler = props => {
        const dialogueVariants = ['Извините, ошибка!',
            'Нет такой буквы!', 'Откройте букву... но в другом слове', 'Вы отвечаете не подумав!'];
        const audioVariants = [wrong1, wrong2, wrong3, wrong4, wrong5, wrong6, wrong7, wrong8, wrong9];
        this.audioHandler(audioVariants);

        this.setState((prevState) => {
            return {
                dialogue: dialogueVariants[Math.floor(Math.random() * Math.floor(dialogueVariants.length))],
                speak: true,
                mistakeCount: prevState.mistakeCount + 1,
            }
        });

        if (this.state.mistakeCount === 2) {
            this.setState({
                cursed: [],
            })
            this.gameEnd();
        }

        this.yakubShutHandler();
    }

    yakubShutHandler = () => {
        setTimeout(() => {
            this.setState({
                speak: false,
            })
        }, 900)
    }

    audioHandler = (audioVariants) => {
        if (this.audio) {
            this.audio.pause();
        }
        this.audio = new Audio(audioVariants[Math.floor(Math.random() * Math.floor(audioVariants.length))]);
        this.audio.play();
    }

    cellClassHandler = (filler = [], cellClass, checkArray) => {
        let content = [<td key={'wordRow0'}></td>];
        for (let i = 1; i < 15; i += 1) {

            if (typeof filler[i - 1] === 'string') {
                content.push(<td key={'wordRow' + i} className={checkArray[i - 1] === 0 ? null : cellClass}>{filler[i - 1]}</td>)
            } else {
                content.push(<td key={'wordRow' + i}>{filler[i - 1]}</td>)
            }
        }
        return content
    }

    drawTranslation = (filler = []) => {
        let content = [<td key={'translationRow0'}></td>];
        for (let i = 1; i < 15; i += 1) {

            if (typeof filler[i - 1] === 'string') {
                content.push(<td key={'translationRow' + i}>{filler[i - 1]}</td>)
            } else {
                content.push(<td key={'translationRow' + i}>{filler[i - 1]}</td>)
            }

        }
        return content
    }

    drawCells = (cellKey) => {
        let content = [];
        for (let i = 0; i < 15; i += 1) {
            content.push(<td key={cellKey + i}></td>)
        }
        return content
    }

    drawLetters = (checkArr) => {
        let content = [];
        const alphabet = this.state.alphabet.split('');
        const alphCheck = checkArr.split('');
        alphabet.map((a, i) => {
            content.push(<div
                onClick={this.letterClickHandler}
                className={alphabet[i] !== alphCheck[i] ? "Fortune-Letter Fortune-Letter_inactive" : "Fortune-Letter"}
                key={'letter' + i}
            >{alphabet[i]}</div>)
        })
        return content
    }

    start = props => {
        try {
            this.loadWord();

            this.setState((prevState) => {
                return {
                    gameStarted: true,
                    dialogue: 'Угадывайте!',
                    alphabetCheck: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                    continue: false,
                    mistakeCount: 0,
                    gameEnded: false,
                    currentRound: prevState.currentRound + 1,
                }
            })

            if (this.state.currentRound === this.state.words.length - 1) {
                this.setState({
                    cursed: [],
                })
                this.gameEnd();
            }
        } catch {
            alert('Подожди, пока слова не загрузятся')
        }
    }

    restart = () => {
        this.setState({
            dialogue: 'Угадывайте!',
            alphabetCheck: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            continue: false,
            mistakeCount: 0,
            gameEnded: false,
            score: 0,
            currentRound: 1,
            answers: [],
        })

        setTimeout(() => { this.loadWord(); }, 0)
    }

    componentDidMount() {
        this.getWords();

        this.difficultyRef.current.children[this.state.difficulty].setAttribute('selected', 'selected');
        this.lvlRef.current.children[this.state.level].setAttribute('selected', 'selected');
    }

    addYakubClass() {
        const buttonClass = ['Fortune-Yakub', 'mt-2'];
        if (this.state.speak) {
            buttonClass.push('Fortune-Yakub_speak');
        }
        return buttonClass.join(' ')
    }

    difficultyHandler = (event) => {
        const number = event.target.value;
        this.setState({
            difficulty: number,
        })
        this.getWords(number, this.state.level);
        localStorage.setItem('fortuneDifficulty', number);
    };

    levelHandler = (event) => {
        const number = event.target.value;
        this.setState({
            level: number,
        })
        this.getWords(this.state.difficulty, number);
        localStorage.setItem('fortuneLvl', number);
    }

    writeStats = async (statsObj) => {
        const content = await fetchAPI("users-set-statistics", statsObj);
        console.log("stats write");
        return content;
    };

    gameEnd = () => {
        const audioVariants = [win1, win2, win3, win4, win5];
        this.setState({
            gameEnded: true,
        })

        const score = this.state.score;
        const time = Date.now();
        const statsObj = { score, time }

        this.writeStats(statsObj)

        setTimeout(() => {
            this.difficultyRef.current.children[this.state.difficulty].setAttribute('selected', 'selected');
            this.lvlRef.current.children[this.state.level].setAttribute('selected', 'selected');
        }, 0);

        if (this.state.score === 0) {
            this.audioHandler([lose2]);
        } else {
            this.audioHandler(audioVariants);
        }
    }

    optionSpawner = (amount, key) => {
        let content = [];
        for (let i = 0; i <= amount; i += 1) {
            content.push(<option key={key + i} value={i}>{i + 1}</option>)
        }
        return content
    }

    render() {
        if (!this.state.gameStarted) {
            return (
                <div className="Fortune container-fluid pt-5">
                    <LevelSelect
                        difficultyRef={this.difficultyRef}
                        lvlRef={this.lvlRef}
                        difficultyHandler={this.difficultyHandler}
                        levelHandler={this.levelHandler}
                        optionSpawner={this.optionSpawner}
                    />
                    <StartScreen gameStart={this.start} />
                </div>
            )
        } else if (this.state.gameEnded) {
            return (
                <div className="Fortune container-fluid pt-5">
                    <LevelSelect
                        difficultyRef={this.difficultyRef}
                        lvlRef={this.lvlRef}
                        difficultyHandler={this.difficultyHandler}
                        levelHandler={this.levelHandler}
                        optionSpawner={this.optionSpawner}
                    />
                    <EndScreen
                        score={this.state.score}
                        restart={this.restart}
                        answers={this.state.answers}
                    />
                </div>
            )
        } else {
            return (
                <div className="Fortune container-fluid pt-5">
                    <div className="Fortune-Playboard row h-75 p-2 pt-4">
                        <div className="col-md-2 col-sm-12 d-flex justify-content-center align-items-center flex-column">
                            <div className="Fortune-Dialogue DialogueBar">
                                <div className="DialogueBar-Box">{this.state.dialogue}</div>
                                <div className="DialogueBar-Triangle"></div>
                            </div>
                            <div className={this.addYakubClass()}></div>
                            <Button onClick={() => { this.gameEnd(); this.setState({ cursed: [] }) }} className="Fortune-Btn_exit p-0 mb-1 mt-1">В музей поля чудес (закончить)</Button>
                            <Button onClick={this.start} variant="success" className={this.state.continue === true ? "Fortune-Btn_next p-1 mb-2 Fortune-Btn_next_active" : "Fortune-Btn_next p-1 mb-2"}>Следующее слово</Button>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <div className="Fortune-Board w-100 h-100">
                                <table className="Fortune-Table">
                                    <tbody>
                                        <tr>
                                            {this.drawCells('1row')}
                                        </tr>
                                        <tr ref={this.engWordRef} className="Fortune-PlayRow">
                                            {this.cellClassHandler(this.state.engWordArr, 'Fortune-Cell_closed', this.state.engWordArrCheck)}
                                        </tr>
                                        <tr>
                                            {this.drawCells('3row')}
                                        </tr>
                                        <tr>
                                            {this.drawCells('4row')}
                                        </tr>
                                        <tr className="Fortune-PlayRowTranslate">
                                            {this.drawTranslation(this.state.rusWordArr)}
                                        </tr>
                                        <tr>
                                            {this.drawCells('6row')}
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="Fortune-Letters mt-2">
                                    {this.drawLetters(this.state.alphabetCheck)}
                                </div>
                            </div>
                        </div>
                        <div className="Fortune-Character col-md-2 col-sm-12 d-flex justify-content-center align-items-center flex-column">
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
    console.log(state)
    return {
        difficulty: state.fortuneGame.difficulty
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeDiff: number => dispatch({ type: 'CHANGE_DIFF', payload: number })
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(FortuneGame);
export default FortuneGame
