import React from "react";
import { connect } from "react-redux";

import CheckBox from "../../Components/CheckBox/CheckBox";
import TextInput from "../../Components/TextInput/TextInput";
import { fetchAPI } from "../../Components/Tools/fetchAPI";
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
  setAllSettings,
} from "../../Store/Actions";

const mapStateToProps = (store) => {
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

  return {
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
  };
};

const mapActionsToProps = {
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
  setAllSettings,
};

class Settings extends React.Component {
  settings = {
    level: this.props.level,
    playExampleSound: this.props.playExampleSound,
    showTranslateWord: this.props.showTranslateWord,
    showExampleString: this.props.showExampleString,
    showExplanationString: this.props.showExplanationString,
    showWordTranscription: this.props.showWordTranscription,
    showWordImage: this.props.showWordImage,
    showBtnShowAgreeAnswer: this.props.showBtnShowAgreeAnswer,
    showBtnDeleteWord: this.props.showBtnDeleteWord,
    showBtnDifficultWord: this.props.showBtnDifficultWord,
    newWordsCount: this.props.newWordsCount,
  };

  toggle = (key) => {
    if (key === "setSitingLevel" || key === "setNewWordsCount") {
      return (e) => {
        this.props[key](e.target.value);
      };
    }
    return (e) => {
      this.props[key](e.target.checked);
    };
  };

  changesSettings = (key) => {
    if (key === "level" || key === "newWordsCount") {
      return (e) => {
        this.settings[key] = e.target.value;
      };
    }
    return (e) => {
      this.settings[key] = e.target.checked;
    };
  };

  sendSettings = () => {
    fetchAPI("setSettings", this.settings).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setAllSettings(data.optional);
          console.log(data.optional);
        });
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 pt-5">
              <div className="settingsContainer pt-5">
                <TextInput
                  text="Уровень"
                  defValue={this.props.level}
                  onChange={this.changesSettings("level")}
                />
                <CheckBox
                  text="Показывать перевод слов"
                  isChecked={this.props.showTranslateWord}
                  onChange={this.changesSettings("showTranslateWord")}
                />
                <CheckBox
                  text="Проигрывать слово автоматически"
                  isChecked={this.props.playExampleSound}
                  onChange={this.changesSettings("playExampleSound")}
                />
                <CheckBox
                  text="Пердложения с объяснением значения слова"
                  isChecked={this.props.showExplanationString}
                  onChange={this.changesSettings("showExplanationString")}
                />
                <CheckBox
                  text="Предложение с примером использования слова"
                  isChecked={this.props.showExampleString}
                  onChange={this.changesSettings("showExampleString")}
                />
                <CheckBox
                  text="Показать транскрипцию слова"
                  isChecked={this.props.showWordTranscription}
                  onChange={this.changesSettings("showWordTranscription")}
                />
                <CheckBox
                  text="Показывать изображение на карточке"
                  isChecked={this.props.showWordImage}
                  onChange={this.changesSettings("showWordImage")}
                />
                <CheckBox
                  text='Кнопка "Показать ответ"'
                  isChecked={this.props.showBtnShowAgreeAnswer}
                  onChange={this.changesSettings("showBtnShowAgreeAnswer")}
                />
                <CheckBox
                  text='Кнопка "Удалить"'
                  isChecked={this.props.showBtnDeleteWord}
                  onChange={this.changesSettings("showBtnDeleteWord")}
                />
                <CheckBox
                  text='Добавить кнопку "Поместить в сложное"'
                  isChecked={this.props.showBtnDifficultWord}
                  onChange={this.changesSettings("showBtnDifficultWord")}
                />
                <TextInput
                  text="Количество слов, которое хотите выучить"
                  defValue={this.props.newWordsCount}
                  onChange={this.changesSettings("newWordsCount")}
                />
              </div>
              <button onClick={this.sendSettings}>Сохранить</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Settings);
