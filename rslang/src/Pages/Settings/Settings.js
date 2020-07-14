import React from "react";
import { connect } from "react-redux";
import { Translation } from 'react-i18next';
import './Settings.scss';
import i18n from "../../i18n";

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
          this.props.setAllSettings(data.optional);
        });
      }
    });
  };

  handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 pt-5">
              <div className="settingsContainer p-5">

                <TextInput
                  text={<Translation>
                    {
                      (t) => <>{t('settings.1')}</>
                    }
                  </Translation>}
                  defValue={this.props.level}
                  onChange={this.changesSettings("level")}
                />
                <CheckBox
                  text={<Translation>
                    {
                      (t) => <>{t('settings.2')}</>
                    }
                  </Translation>}
                  isChecked={this.props.showTranslateWord}
                  onChange={this.changesSettings("showTranslateWord")}
                />
                <CheckBox
                  text={<Translation>
                    {
                      (t) => <>{t('settings.3')}</>
                    }
                  </Translation>}
                  isChecked={this.props.playExampleSound}
                  onChange={this.changesSettings("playExampleSound")}
                />
                <CheckBox
                  // text="Предложения с объяснением значения слова"
                  text={<Translation>
                    {
                      (t) => <>{t('settings.4')}</>
                    }
                  </Translation>}
                  isChecked={this.props.showExplanationString}
                  onChange={this.changesSettings("showExplanationString")}
                />
                <CheckBox
                  text={<Translation>
                    {
                      (t) => <>{t('settings.4')}</>
                    }
                  </Translation>}
                  isChecked={this.props.showExampleString}
                  onChange={this.changesSettings("showExampleString")}
                />
                <CheckBox
                  text={<Translation>
                    {
                      (t) => <>{t('settings.5')}</>
                    }
                  </Translation>}
                  isChecked={this.props.showWordTranscription}
                  onChange={this.changesSettings("showWordTranscription")}
                />
                <CheckBox
                  text={<Translation>
                    {
                      (t) => <>{t('settings.6')}</>
                    }
                  </Translation>}
                  isChecked={this.props.showWordImage}
                  onChange={this.changesSettings("showWordImage")}
                />
                <CheckBox
                  text={<Translation>
                    {
                      (t) => <>{t('settings.7')}</>
                    }
                  </Translation>}
                  isChecked={this.props.showBtnShowAgreeAnswer}
                  onChange={this.changesSettings("showBtnShowAgreeAnswer")}
                />
                <CheckBox
                  text={<Translation>
                    {
                      (t) => <>{t('settings.8')}</>
                    }
                  </Translation>}
                  isChecked={this.props.showBtnDeleteWord}
                  onChange={this.changesSettings("showBtnDeleteWord")}
                />
                <CheckBox
                  text={<Translation>
                    {
                      (t) => <>{t('settings.9')}</>
                    }
                  </Translation>}
                  isChecked={this.props.showBtnDifficultWord}
                  onChange={this.changesSettings("showBtnDifficultWord")}
                />
                <TextInput
                  text={<Translation>
                    {
                      (t) => <>{t('settings.10')}</>
                    }
                  </Translation>}
                  defValue={this.props.newWordsCount}
                  onChange={this.changesSettings("newWordsCount")}
                />
                <button className="btn btn-primary" onClick={() => this.handleClick('en')}>EN</button>
                <button className="btn btn-primary" onClick={() => this.handleClick('ru')}>RU</button>
              </div>
              <button className="btn btn-primary" onClick={this.sendSettings}>
                {<Translation>
                  {
                    (t) => <>{t('settings.11')}</>
                  }
                </Translation>}
              </button>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Settings);
