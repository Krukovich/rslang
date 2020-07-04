import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import SprintCard from '../../Components/SprintCard/SprintCard';
import StartScreen from './StartScreen/StartScreen';
import EndScreen from './EndScreen/EndScreen';

import Yakub from './assets/wait.png'

import './FortuneGame.scss';

class FortuneGame extends Component {
    constructor() {
        super();
        this.state = {
            gameStarted: true,
            gameEnded: false,
            counter: 60,
            score: 0,
            maxStreak: 0,
            modifier: 1,
            mixedArr: 0,
            activeQuestion: 0,
            mistakeCount: 0,
            words: 0,
            alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            cursed: [],
            engWordArr: [],
            rusWordArr: [],
            dialogue: 'Угадывайте!',
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
            engWordArr: wordObj.word.toUpperCase().split('')
        });

        // const engArr = wordObj.word.split('');
        // const rusArr = wordObj.wordTranslate.split('');

        // this.drawRusWord(rusArr);
        // this.drawEngWord(engArr);
        // this.drawWord(engArr, rusArr);
    }

    letterClickHandler = (event) => {
        if (event.target.className.includes('Fortune-Letter_inactive')) return
        event.target.classList.add('Fortune-Letter_inactive');
        if (this.state.engWordArr.includes(event.target.textContent)) {
            this.rightAnswerHandler(event);
        } else {
            this.wrongAnswerHandler(event);
        }
    }

    rightAnswerHandler = props => {
        const dialogueVariants = ['Абсолютно верно!', '', '', '', '', ''];
        for (let i = 0; i < this.engWordRef.current.children.length; i += 1) {
            if (props.target.textContent === this.engWordRef.current.children[i].textContent) {
                this.engWordRef.current.children[i].classList.remove('Fortune-Cell_closed');
            }
        }

        this.setState((prevState) => {
            return {
                score: prevState.score + 100,
                dialogue: 'Абсолютно верно!'
            }
        });
    }

    wrongAnswerHandler = props => {
        alert('ass')
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

    drawLetters = () => {
        let content = [];
        const alphabet = this.state.alphabet.split('');
        alphabet.map((a, i) => {
            content.push(<td onClick={this.letterClickHandler} className="Fortune-Letter" key={i}>{a}</td>)
        })
        return content
    }

    start = props => {
        // alert(this.state.words);
        this.render();
        this.loadWord();
    }

    componentDidMount() {
        // this.getWords();
        // this.loadWords()
    }

    render() {
        this.getWords();
        if (!this.state.gameStarted) {
            return (
                <div className="Fortune container mt-5">
                </div >
            )
            // return (
            // <div className="Sprint container mt-5">
            //     <div className="row">
            //         <div className="md-col-12 w-100 p-3 d-flex flex-column justify-content-center align-items-center">
            //             <div className="d-flex align-items-center">
            //                 <span className="mr-2">Сложность:</span>
            //                 <select ref={this.selectRef} onClick={this.difficultyHandler} className="d-inline-block">
            //                     <option value="0">1</option>
            //                     <option value="1">2</option>
            //                     <option value="2">3</option>
            //                     <option value="3">4</option>
            //                     <option value="4">5</option>
            //                     <option value="5">6</option>
            //                 </select>
            //             </div>
            //         </div>
            //     </div>
            //     <StartScreen gameStart={this.gameStart} />
            // </div>
            // )
        } else if (this.state.gameEnded) {
            return (
                <div className="Fortune container mt-5">
                </div >
            )
            // return <EndScreen
            // score={this.state.score}
            // restart={this.gameRestart}
            // />
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
                            <div className="Fortune-Yakub mb-2 mt-2"></div>
                            <Button onClick={this.start} className="Fortune-Btn_exit p-0">В музей поля чудес (на главную)</Button>
                        </div>
                        <div className="col-md-8">
                            <div className="Fortune-Board w-100 h-100">
                                <table className="Fortune-Table">
                                    <tbody>
                                        <tr>
                                            {this.drawCells()}
                                        </tr>
                                        <tr ref={this.engWordRef} className="Fortune-PlayRow">
                                            {this.drawCells(this.state.engWordArr, 'Fortune-Cell_closed')}
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
                                {this.drawLetters()}
                                {/* <div className="Fortune-Letter">A</div>
                                <div className="Fortune-Letter">B</div>
                                <div className="Fortune-Letter">C</div>
                                <div className="Fortune-Letter">D</div>
                                <div className="Fortune-Letter">E</div>
                                <div className="Fortune-Letter">F</div>
                                <div className="Fortune-Letter">G</div>
                                <div className="Fortune-Letter">H</div>
                                <div className="Fortune-Letter">I</div>
                                <div className="Fortune-Letter">J</div>
                                <div className="Fortune-Letter">K</div>
                                <div className="Fortune-Letter">L</div>
                                <div className="Fortune-Letter">M</div>
                                <div className="Fortune-Letter">N</div>
                                <div className="Fortune-Letter">O</div>
                                <div className="Fortune-Letter">P</div>
                                <div className="Fortune-Letter">Q</div>
                                <div className="Fortune-Letter">R</div>
                                <div className="Fortune-Letter">S</div>
                                <div className="Fortune-Letter">T</div>
                                <div className="Fortune-Letter">U</div>
                                <div className="Fortune-Letter">V</div>
                                <div className="Fortune-Letter">W</div>
                                <div className="Fortune-Letter">X</div>
                                <div className="Fortune-Letter">Y</div>
                                <div className="Fortune-Letter">Z</div> */}
                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <h3 className="Fortune-Score">{this.state.score}</h3>
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
