import React from "react";
import "./CreateAccount.scss";
import { NavLink } from "react-router-dom";
import { AlertRed } from "../../../Components/Alert/Alert";
import { CreateAccountLayout } from "./CreateAccountLayout";
import * as Const from "../../../constant";

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

  createUser = async (event) => {
    event.preventDefault();
    const rawResponse = await fetch(Const.API_LINK + 'users',
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"email": this.state.inputEmail, "password": this.state.inputPassword}),
      }
    );
    console.log(this.state.inputEmail, this.state.inputPassword)
    const content = await rawResponse.json();
    this.registrationResult(content);
    console.log(content);
  };

  registrationResult = (answer) => {
    if (answer.email) {
      this.setState({
        registrationStatus: "correct",
        alertMessage: "Hellow User",
      });
    }
    this.setState({ showAlert: true });
  }

  closeAlert = () => {
    this.props.history.push({
      pathname: "/",
    });
  };

  emailInputHandler = (event) => {
    this.setState({inputEmail: event.target.value});
  }

  passwordInputHandler = (event) => {
    this.setState({inputPassword: event.target.value});
  }

  render() {
    return (
      <AlertRed
        showAlert={this.state.showAlert}
        onSubmit={this.closeAlert}
        HeadText={"Registration " + this.state.registrationStatus}
        MainText={this.state.alertMessage}
      >
        <CreateAccountLayout>
          <form onSubmit={(e) => this.createUser(e)}>
            <h2 className="text-center">Create an Account</h2>
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
                Registrater
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
            <NavLink to="/">Log in</NavLink>
          </p>
        </CreateAccountLayout>
      </AlertRed>
    );
  }
}
