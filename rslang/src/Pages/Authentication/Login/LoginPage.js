import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.scss";
import { AlertRed } from "../../../Components/Alert/Alert";
import { LoginLayout } from "./LoginLayout";
import * as Const from "../../../constant";
import { getCookie } from "../../../Components/Tools/GetCoocke";
import { Redirect } from "react-router-dom";
import { fetchAPI } from "../../../Components/Tools/fetchAPI";

export class Login extends React.Component {
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

  request = async (e) => {
    e.preventDefault();
    const content = await fetchAPI("signin", {
      email: this.state.inputEmail,
      password: this.state.inputPassword,
    });
    this.loginResult(content);
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
            <form onSubmit={(e) => this.request(e)}>
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
                  Log in
                </button>
              </div>
              <div className="clearfix">
                <label className="pull-left checkbox-inline"></label>
                <NavLink to="#ForgotPassword" className="pull-right">
                  Forgot Password?
                </NavLink>
              </div>
            </form>
            <p className="text-center">
              <NavLink to="/createanaccount">Create an Account</NavLink>
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
    return <Redirect to="/main" />;
  }
}
