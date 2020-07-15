import React from "react";
import "./CreateAccount.scss";
import { NavLink } from "react-router-dom";
import { AlertRed } from "../../../Components/Alert/Alert";
import { CreateAccountLayout } from "./CreateAccountLayout";
import * as Const from "../../../constant";
import { fetchAPI } from "../../../Components/Tools/fetchAPI";
import { getCookie } from "../../../Components/Tools/getCookie";
import { Redirect } from "react-router-dom";
import { Translation } from 'react-i18next';

export class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      loginState: false,
      loginStatus: "error",
      alertMessage: "User already exists",
      inputEmail: "",
      inputPassword: "",
    };

    this.emailInputHandler = this.emailInputHandler.bind(this);
    this.passwordInputHandler = this.passwordInputHandler.bind(this);
  }

  request = async (e) => {
    e.preventDefault();
    const content = await fetchAPI("users", {
      email: this.state.inputEmail,
      password: this.state.inputPassword,
    });
    this.registrationResult(content);
  };

  registrationResult = (answer) => {
    if (answer.email) {
      this.setState({
        registrationStatus: "correct",
        alertMessage: "Hellow User",
      });
    }
    this.requestl();
  };
  /*Login*/
  requestl = async () => {
    const content = await fetchAPI("signin", {
      email: this.state.inputEmail,
      password: this.state.inputPassword,
    });
    this.loginResult(content);
    this.setState({ showAlert: true });
  };

  loginResult = (answer) => {
    if (answer.message === "Authenticated") {
      this.setLoginCookie(answer.userId, answer.token);
      fetchAPI("users-set-start-statistics");
      fetchAPI("setSettingsStart");
    }
  };

  setLoginCookie = (userId, token) => {
    document.cookie = `userId=${userId}; Path=/; max-age=14400`;
    document.cookie = `token=${token}; Path=/; max-age=14400`;
  };
  /****/

  closeAlert = () => {
    this.props.history.push({
      pathname: "/",
    });
  };

  emailInputHandler = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  passwordInputHandler = (event) => {
    this.setState({ inputPassword: event.target.value });
  };

  checkCookie = () => {
    if (getCookie("userId") !== undefined) {
      return true;
    }
    return false;
  };

  render() {
    if (!this.checkCookie()) {
      return (
        <AlertRed
          showAlert={this.state.showAlert}
          onSubmit={this.closeAlert}
          HeadText={"Registration " + this.state.registrationStatus}
          MainText={this.state.alertMessage}
        >
          <CreateAccountLayout>
            <form onSubmit={(e) => this.request(e)}>
              <h2 className="text-center">
                <Translation>
                  {
                    (t) => <>{t('auth.3')}</>
                  }
                </Translation>
              </h2>
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
                  title={Const.PASSWORD_REQUIREMENTS}
                  pattern={Const.PASSWORD_PATTERN}
                  className="form-control"
                  placeholder="Password"
                  required="required"
                  onChange={this.passwordInputHandler}
                ></input>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  <Translation>
                    {
                      (t) => <>{t('auth.4')}</>
                    }
                  </Translation>
                </button>
              </div>
              <div className="clearfix">
                <label className="pull-left checkbox-inline"></label>
              </div>
            </form>
            <p className="text-center">
              <NavLink to="/">
                <Translation>
                  {
                    (t) => <>{t('auth.1')}</>
                  }
                </Translation>
              </NavLink>
            </p>
          </CreateAccountLayout>
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
