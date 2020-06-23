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

const mapStateToProps =(store) =>{
  const {  
    settings,
    setSetingLevel,
    setShowTranslateWord,
    setShowExampleString,
    setShowExplanationString,
    setWordImage,
    setShowBtnAgreeAnswer,
    setShowBtnDeleteWord,
    setNewWordsCount,
    setDifficultWords,
    setDayLearningWords
  } = store.appSettings;
    
  return{
    settings: settings,
    setSetingLevel: setSetingLevel,
    setShowTranslateWord: setShowTranslateWord,
    setShowExampleString: setShowExampleString,
    setShowExplanationString: setShowExplanationString,
    setWordImage: setWordImage,
    setShowBtnAgreeAnswer: setShowBtnAgreeAnswer,
    setShowBtnDeleteWord:setShowBtnDeleteWord,
    setNewWordsCount: setNewWordsCount,
    setDifficultWords: setDifficultWords,
    setDayLearningWords: setDayLearningWords,

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
    debugger;


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
  togle(key) {
    if (key === 'LEVEL' || 'key==NEW_WORDS_COUNT') {
      return (e) => {
        console.log(this.state)
        this.setState({ [key]: e.target.value })
      }
    }
    return (e) => {
      this.setState({ [key]: e.target.checked },
      () => console.log(this.state))
      this.props[key](e.target.checked)

    }
  }

  


  render() {
    return (
      
      <div className="settingsContainer">
        {console.log(this.props) }
        <TextInput text='Уровень' defValue={this.props.setSetingLevel} onChange={this.togle('LEVEL')} />
        <CheckBox text='Показывать перевод слов' isChecked={this.props.setShowTranslateWord} onChange={this.togle('setShowTranslateWord')} />
        <CheckBox text='Пердложения с объяснением значения слова' isChecked={this.state.SHOW_EXPLANATION_STRING} onChange={this.togle('SHOW_EXPLANATION_STRING')} />
        <CheckBox text='Предложение с примером использования слова' isChecked={this.state.SHOW_EXAMPLE_STRING} onChange={this.togle('SHOW_EXAMPLE_STRING')} />
        <CheckBox text='Показать транскрипцию слова' isChecked={this.state.SHOW_WORD_TRANSCRIPTION} onChange={this.togle('SHOW_WORD_TRANSCRIPTION')} />
        <CheckBox text='Показывать изображение на карточке' isChecked={this.state.SHOW_WORD_IMAGE} onChange={this.togle('SHOW_WORD_IMAGE')} />
        <CheckBox text='Кнопка "Показать ответ"' isChecked={this.state.SHOW_BTN_SHOW_AGREE_ANSWER} onChange={this.togle('SHOW_BTN_SHOW_AGREE_ANSWER')} />
        <CheckBox text='Кнопка "Удалить"' isChecked={this.state.SHOW_BTN_DELETE_WORD} onChange={this.togle('SHOW_BTN_DELETE_WORD')} />
        <CheckBox text='Добавить кнопку "Поместить в сложное"' isChecked={this.state.SHOW_BTN_DIFFICULT_WORD} onChange={this.togle('SHOW_BTN_DIFFICULT_WORD')} />
        <TextInput text='Количество слов, котрое хотите выучить' defValue={this.state.NEW_WORDS_COUNT} onChange={this.togle('NEW_WORDS_COUNT')} />
      </div>
    )

  }
}




export default connect(mapStateToProps, mapActionsToProps)(Settings)
