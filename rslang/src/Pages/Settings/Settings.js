/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Settings.scss';
import CheckBox from './CheckBox/CheckBox';
import TextInput from './TextInput/TextInput';
import { connect } from 'react-redux';
import {
  setSitingLevel,
  setShowTranslateWord,
  setShowExampleString,
  setShowExplanationString,
  setWordImage,
  setShowBtnAgreeAnswer,
  setShowBtnDeleteWord,
  setNewWordsCount,
  setDayLearningWords,
  setShowBtnDifficultWord
} from '../../Store/Actions';
import { faThList, faBoxTissue } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps =(store) =>{
  const {  
    level,
    playExampleSound,
    showTranslateWord,
    showExampleString,
    showExplanationString,
    showWordsTranslate,
    showWordImage,
    showBtnShowAgreeAnswer,
    showBtnDeleteWord,
    showBtnDifficultWord,
    newWordsCount,
  } = store.appSettings;
    
  return{
    level:level,
    playExampleSound:playExampleSound,
    showTranslateWord:showTranslateWord,
    showExampleString:showExampleString,
    showExplanationString:showExplanationString,
    showWordsTranslate:showWordsTranslate,
    showWordImage:showWordImage,
    showBtnShowAgreeAnswer:showBtnShowAgreeAnswer,
    showBtnDeleteWord:showBtnDeleteWord,
    showBtnDifficultWord:showBtnDifficultWord,
    newWordsCount:newWordsCount,

  }
}

const mapActionsToProps ={
  setSitingLevel,
  setShowTranslateWord,
  setShowExampleString,
  setShowExplanationString,
  setWordImage,
  setShowBtnAgreeAnswer,
  setShowBtnDeleteWord,
  setNewWordsCount,
  setDayLearningWords,
  setShowBtnDifficultWord,
}

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    // global app settings
    LEVEL: 1, // number indicating difficult level
    SHOW_TRANSLATE_WORD: true, // show translate word
    SHOW_EXAMPLE_STRING: true, // show example string
    SHOW_EXPLANATION_STRING: true, // show explanation string
    SHOW_WORD_TRANSCRIPTION: false, // show word transcription
    SHOW_WORD_IMAGE: true, // show words image example
    SHOW_BTN_SHOW_AGREE_ANSWER: true, // show btn next step
    SHOW_BTN_DELETE_WORD: true, // show btn removal a word from learning
    SHOW_BTN_DIFFICULT_WORD: true, // show btn add words to a difficult group
    NEW_WORDS_COUNT: 50, // number of new words to learn

  }
  // togle = (e)=> {
  //   console.log(e.target.id)

  //   this.props.setWordImage(false);
  // }

  togle = (key) =>{
    if(key == 'setSitingLevel' || key == 'setNewWordsCount'){
      return (e) =>{
        this.props[key](e.target.value)

      }
    }
    return (e) =>{
      this.props[key](e.target.checked)
    }
  }

  render() {
    return (
      
      <div className="settingsContainer">
        <TextInput text='Уровень' defValue={this.props.level} onChange={this.togle('setSitingLevel')} />
        <CheckBox text='Показывать перевод слов' isChecked={this.props.showTranslateWord} onChange={this.togle('setShowTranslateWord')} />
        <CheckBox text='Пердложения с объяснением значения слова' isChecked={this.props.showExplanationString} onChange={this.togle('setShowExplanationString')} />
        <CheckBox text='Предложение с примером использования слова' isChecked={this.props.showExampleString} onChange={this.togle('setShowExampleString')}  />
        {/* <CheckBox text='Показать транскрипцию слова' isChecked={false} onChange={this.togle('SHOW_WORD_TRANSCRIPTION')} /> */}
        <CheckBox text='Показывать изображение на карточке' isChecked={this.props.showWordImage} onChange={this.togle('setWordImage')}/>
        <CheckBox text='Кнопка "Показать ответ"' isChecked={this.props.showBtnShowAgreeAnswer} onChange={this.togle('setShowBtnAgreeAnswer')} />
        <CheckBox text='Кнопка "Удалить"' isChecked={this.props.showBtnDeleteWord} onChange={this.togle('setShowBtnDeleteWord')} />
        <CheckBox text='Добавить кнопку "Поместить в сложное"' isChecked={this.props.showBtnDifficultWord} onChange={this.togle('setShowBtnDifficultWord')} />
        <TextInput text='Количество слов, котрое хотите выучить' defValue={this.props.newWordsCount} onChange={this.togle('setNewWordsCount')} />
      </div>
    )

  }
}




export default connect(mapStateToProps, mapActionsToProps)(Settings)
