import React from 'react';
import { connect } from 'react-redux';

import CheckBox from '../../Components/CheckBox/CheckBox';
import TextInput from '../../Components/TextInput/TextInput';
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
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';

const mapStateToProps = (store) =>{
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
    this.state = {
      clicked: false,
    }
  }

  toggle = (key) =>{
    if(key == 'setSitingLevel' || key == 'setNewWordsCount'){
      return (e) =>{
        this.props[key](e.target.value)

      }
    }
    return (e) =>{
      this.props[key](e.target.checked)
    }
  }

  asideToggle = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar clicked={ this.state.clicked } />
        <Header asideToggle={ this.asideToggle } clicked={ this.state.clicked } />
        <div className="container">
          <div className="row">
            <div className="col-12 pt-5">
              <div className="settingsContainer pt-5">
                <TextInput
                  text='Уровень'
                  defValue={this.props.level}
                  onChange={this.toggle('setSitingLevel')}
                />
                <CheckBox
                  text='Показывать перевод слов'
                  isChecked={this.props.showTranslateWord}
                  onChange={this.toggle('setShowTranslateWord')}
                />
                <CheckBox
                  text='Пердложения с объяснением значения слова'
                  isChecked={this.props.showExplanationString}
                  onChange={this.toggle('setShowExplanationString')}
                />
                <CheckBox
                  text='Предложение с примером использования слова'
                  isChecked={this.props.showExampleString}
                  onChange={this.toggle('setShowExampleString')}
                />
                {/* <CheckBox text='Показать транскрипцию слова' isChecked={false} onChange={this.togle('SHOW_WORD_TRANSCRIPTION')} /> */}
                <CheckBox
                  text='Показывать изображение на карточке'
                  isChecked={this.props.showWordImage}
                  onChange={this.toggle('setWordImage')}
                />
                <CheckBox
                  text='Кнопка "Показать ответ"'
                  isChecked={this.props.showBtnShowAgreeAnswer}
                  onChange={this.toggle('setShowBtnAgreeAnswer')}
                />
                <CheckBox
                  text='Кнопка "Удалить"'
                  isChecked={this.props.showBtnDeleteWord}
                  onChange={this.toggle('setShowBtnDeleteWord')}
                />
                <CheckBox
                  text='Добавить кнопку "Поместить в сложное"'
                  isChecked={this.props.showBtnDifficultWord}
                  onChange={this.toggle('setShowBtnDifficultWord')}
                />
                <TextInput
                  text='Количество слов, котрое хотите выучить'
                  defValue={this.props.newWordsCount}
                  onChange={this.toggle('setNewWordsCount')}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )

  }
}

export default connect(mapStateToProps, mapActionsToProps)(Settings)
