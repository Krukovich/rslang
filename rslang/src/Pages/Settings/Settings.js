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
  setDifficultWords,
  setDayLearningWords
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
  setDifficultWords,
  setDayLearningWords
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
  togle = (key)=> {
    return (e) => {
      // this.props.key(e.target.checked)
    }
  }

  


  render() {
    return (
      
      <div className="settingsContainer">
        <TextInput text='Уровень' defValue={this.props.setSetingLevel} onChange={this.togle('LEVEL')} />
        <CheckBox text='Показывать перевод слов' isChecked={this.props.showTranslateWord} onChange={this.togle('setShowTranslateWord')} />
        <CheckBox text='Пердложения с объяснением значения слова' isChecked={this.props.showExplanationString} onChange={this.togle('SHOW_EXPLANATION_STRING')} />
        <CheckBox text='Предложение с примером использования слова' isChecked={this.props.showExampleString} onChange={this.togle('SHOW_EXAMPLE_STRING')} />
        {/* <CheckBox text='Показать транскрипцию слова' isChecked={false} onChange={this.togle('SHOW_WORD_TRANSCRIPTION')} /> */}
        <CheckBox text='Показывать изображение на карточке' isChecked={this.props.showWordImage} onChange={this.togle('fd')} />
        <CheckBox text='Кнопка "Показать ответ"' isChecked={this.props.showBtnShowAgreeAnswer} onChange={this.togle('SHOW_BTN_SHOW_AGREE_ANSWER')} />
        <CheckBox text='Кнопка "Удалить"' isChecked={this.props.showBtnDeleteWord} onChange={this.togle('SHOW_BTN_DELETE_WORD')} />
        <CheckBox text='Добавить кнопку "Поместить в сложное"' isChecked={this.props.showBtnDifficultWord} onChange={this.togle('SHOW_BTN_DIFFICULT_WORD')} />
        <TextInput text='Количество слов, котрое хотите выучить' defValue={12} onChange={this.togle('NEW_WORDS_COUNT')} />
      </div>
    )

  }
}




export default connect(mapStateToProps, mapActionsToProps)(Settings)
