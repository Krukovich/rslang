import React from "react";
import { NavLink } from "react-router-dom";
import { AlertRed } from "../../../Components/Alert/Alert";
import * as Const from "../../../constant";
import { Words } from '../components/Words';
import { AudioComp } from '../components/AudioComp';
import './AudioCall.scss';

export class AudioCall extends React.Component {
  constructor(props) {
    super(props);
    this.token = props.token;
    this.userId = props.userId;
    this.state = {
      gameStart: false,
      gameProgress: 0,
      gameTime: 0,
      gameScore: 0,
      gameProgress: 0,
      wordsArray: [],
      wordsDisplayCount: 5,
      statusButton: ['не знаю', 'продолжить']
    };
  }


  randomWords = async ( page, group ) => {
      const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=2&group=2`);
      const content = await rawResponse.json(); 
      this.setState({"wordsArray": content});  
      console.log('redy to game') 
      return content;
    };
    
    startGame = () => {
        this.setState({"gameStart": true});
    }
    
    componentDidMount() {
        if(this.state.wordsArray.length === 0) {
            this.randomWords();
        }        
        console.log("componentDidMount", this.state.wordsArray)
    }

  render() {
      return (
       <div className="AudioCall vh-100">  
           <h1>AudioCall</h1>
           
           <div className="text-center">
           <button className="btn btn-primary " onClick={() => this.startGame()}>Начать игру</button>
           </div>           
           <AudioComp wordsArray={this.state.wordsArray} gameStart={this.state.gameStart}/>
           <Words 
            wordsArray={this.state.wordsArray} 
            gameStart={this.state.gameStart}
            wordsDisplayCount={this.state.wordsDisplayCount}
            />
           
       </div>
              
      );
  }
}
