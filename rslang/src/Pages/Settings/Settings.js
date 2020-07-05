import React from 'react';
import { connect } from 'react-redux';

import CheckBox from '../../Components/CheckBox/CheckBox';
import TextInput from '../../Components/TextInput/TextInput';
import { fetchAPI } from '../../Components/Tools/fetchAPI'
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
  setShowBtnDifficultWord,
  setShowWordTranscription,
  setPlayExampleSound,
} from '../../Store/Actions';

const mapStateToProps = (store) =>{
  const {  
    level,
    playExampleSound,
    showTranslateWord,
    showExampleString,
    showExplanationString,
    showWordTranscription,
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
    showWordImage,
    showBtnShowAgreeAnswer,
    showBtnDeleteWord,
    showBtnDifficultWord,
    newWordsCount,
    showWordTranscription,
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
  setShowWordTranscription,
  setPlayExampleSound,
}

class Settings extends React.Component {
  settings = {
    'fdfd': '123',
  }

  toggle = (key) =>{
    if(key === 'setSitingLevel' || key === 'setNewWordsCount'){
      return (e) =>{
        this.props[key](e.target.value)

      }
    }
    return (e) =>{
      this.props[key](e.target.checked)
    }
  }

  changesSettings = (key) =>{
    if(key === 'level' || key === 'newWordsCount'){
      return (e) =>{
        this.settings[key] = e.target.value
        console.log(this.settings)
      }
    }
    return (e)=>{

      this.settings[key] = e.target.checked
      console.log(this.settings)
    }
  }

  render() {
    // fetchAPI('setSettings', this.settings)
    fetchAPI('getSettings')
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 pt-5">
              <div className="settingsContainer pt-5">
                <TextInput
                  text='Уровень'
                  defValue={this.props.level}
                  onChange={this.changesSettings('level')}
                />
                <CheckBox
                  text='Показывать перевод слов'
                  isChecked={this.props.showTranslateWord}
                  onChange={this.changesSettings('ShowTranslateWord')}
                />
                <CheckBox
                 text='Проигрывать слово автоматически'
                 isChecked={this.props.playExampleSound}
                 onChange={this.changesSettings('playExampleSound')}/>
                <CheckBox
                  text='Пердложения с объяснением значения слова'
                  isChecked={this.props.showExplanationString}
                  onChange={this.changesSettings('ShowExplanationString')}
                />
                <CheckBox
                  text='Предложение с примером использования слова'
                  isChecked={this.props.showExampleString}
                  onChange={this.changesSettings('ShowExampleString')}
                />
                <CheckBox
                 text='Показать транскрипцию слова' 
                 isChecked={this.props.showWordTranscription} 
                 onChange={this.changesSettings('ShowWordTranscription')} />
                <CheckBox
                  text='Показывать изображение на карточке'
                  isChecked={this.props.showWordImage}
                  onChange={this.changesSettings('showWordImage')}
                />
                <CheckBox
                  text='Кнопка "Показать ответ"'
                  isChecked={this.props.showBtnShowAgreeAnswer}
                  onChange={this.changesSettings('ShowBtnAgreeAnswer')}
                />
                <CheckBox
                  text='Кнопка "Удалить"'
                  isChecked={this.props.showBtnDeleteWord}
                  onChange={this.changesSettings('ShowBtnDeleteWord')}
                />
                <CheckBox
                  text='Добавить кнопку "Поместить в сложное"'
                  isChecked={this.props.showBtnDifficultWord}
                  onChange={this.changesSettings('ShowBtnDifficultWord')}
                />
                <TextInput
                  text='Количество слов, которое хотите выучить'
                  defValue={this.props.newWordsCount}
                  onChange={this.changesSettings('newWordsCount')}
                />
              </div>
              <button>Сохранить</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )

  }
}

export default connect(mapStateToProps, mapActionsToProps)(Settings)
