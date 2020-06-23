import React from 'react';
import './Settings.scss';
import CheckBox from '../../Components/CheckBox/CheckBox';
import TextInput from '../../Components/TextInput/TextInput';
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
