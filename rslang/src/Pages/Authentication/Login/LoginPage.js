import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import { AlertRed } from "../../../Components/Alert/Alert";
import { LoginLayout } from "./LoginLayout";
import * as Const from "../../../constant";
import { getCookie } from "../../../Components/Tools/GetCoocke";
import { Redirect } from "react-router-dom";
import { fetchAPI } from "../../../Components/Tools/fetchAPI";
import { setDayLearningWords } from '../../../Store/Actions';
import { getWords, saveWordsInLocalStorage } from '../../../service';

import "./Login.scss";

const mapStateToProps = (store) => {
  return {
    level: store.appSettings.level,
    newWordsCount: store.appSettings.newWordsCount,
    dayLearningWords: store.appSettings.dayLearningWords,
  }
}

const mapActionToProps = {
  setDayLearningWords,
}


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      loginState: false,
      loginStatus: "error",
      alertMessage: "wrong username or password",
      inputEmail: "",
      inputPassword: "",
    };

    this.emailInputHandler = this.emailInputHandler.bind(this);
    this.passwordInputHandler = this.passwordInputHandler.bind(this);
  }

  requestSignin = async (e) => {
    e.preventDefault();
    const content = await fetchAPI("signin", {
      email: this.state.inputEmail,
      password: this.state.inputPassword,
    });
    this.loginResult(content);
    if (content.message === Const.LOGIN.ON) {
      this.requestDayLearningWords()
    }
  };

  
  requestDayLearningWords = async () => {
    const words = await getWords(this.props.level, this.props.newWordsCount);
      if (words.length !== 0) {
        this.props.setDayLearningWords(words);
        saveWordsInLocalStorage(words);
      }
      console.log(this.props.dayLearningWords)
  };

  loginResult = (answer) => {
    if (answer.message === "Authenticated") {
      this.setState({ loginStatus: "correct", alertMessage: "Hellow User" });
      this.setLoginCookie(answer.userId, answer.token);
    }
    this.setState({ showAlert: true });
  };

  setLoginCookie = (userId, token) => {
    document.cookie = `userId=${userId}; Path=/; max-age=14400`;
    document.cookie = `token=${token}; Path=/; max-age=14400`;
  };

  checkCookie = () => {
    if (getCookie("userId") !== undefined) {
      return true;
    }
    return false;
  };

  emailInputHandler = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  passwordInputHandler = (event) => {
    this.setState({ inputPassword: event.target.value });
  };

  render() {
    if (!this.checkCookie()) {
      return (
        <AlertRed
          showAlert={this.state.showAlert}
          onSubmit={GoToMain}
          HeadText={"Login " + this.state.loginStatus}
          MainText={this.state.alertMessage}
        >
          <LoginLayout>
            <form onSubmit={(e) => this.requestSignin(e)}>
              <h2 className="text-center">Log in</h2>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required="required"
                  onChange={this.emailInputHandler}
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  pattern={Const.PASSWORD_PATTERN}
                  className="form-control"
                  placeholder="Password"
                  required="required"
                  onChange={this.passwordInputHandler}
                ></input>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Войти
                </button>
              </div>
              <div className="clearfix">
                <label className="pull-left checkbox-inline"></label>
                <NavLink to="#ForgotPassword" className="pull-right">
                  Забыли пароль?
                </NavLink>
              </div>
            </form>
            <p className="text-center">
              <NavLink to="/createanaccount">Создать аккаунт</NavLink>
            </p>
          </LoginLayout>
        </AlertRed>
      );
    } else {
      return <GoToMain />;
    }
  }
}

class GoToMain extends React.Component {
  render() {
    return <Redirect to="/main-page" />;
  }
}

export default connect(mapStateToProps, mapActionToProps)(Login);
