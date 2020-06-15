import React from 'react';
import './CreateAccount.scss'
import { getInputData } from '../Lib/GetInputData'
import AlertDismissibleExample from '../../Alert/Alert'
import {NavLink} from 'react-router-dom'

class CreateAccount extends React.Component {

  state = {
    showAlert: false,
    registrationStatus: 'error',
    alertMessage: 'User already exists',
  }

  createUser = async (event) => {
    event.preventDefault();
    const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(getInputData())
    });
    const content = await rawResponse.json();
    this.registrationResult(content);
    console.log(content);
  };

  registrationResult (answer) {
    if (answer.email) {
      this.setState({registrationStatus: 'correct', alertMessage: 'Hellow User'})
    } 
    this.setState({showAlert: true})
  }

  closeAlert = () => {
    this.props.history.push({
      pathname: '/'
    })
  }

  render() {
    console.log(this.props.history)
    return (
      <AlertDismissibleExample 
      showAlert={this.state.showAlert} 
      onSubmit={this.closeAlert}
      HeadText={'Registration ' + this.state.registrationStatus}
      MainText={this.state.alertMessage}
      >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="registeration-form">
              <div className="CreateAccount">
                <form onSubmit={(e) => this.createUser (e)}>
                  <h2 className="text-center">Create an Account</h2>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" required="required"></input>
                  </div>
                  <div className="form-group">
                    <input
                      type="password" 
                      title="Пароль должен содержать одну цифру, один спецсимвол из +-_@$!%*?&#.,;:[]{} и одну заглавную букву"
                      pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                      className="form-control"
                      placeholder="Password"
                      required="required"
                    >
                    </input>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" >Registrater</button>
                  </div>
                  <div className="clearfix">
                    <label className="pull-left checkbox-inline">
                    </label>
                    <NavLink to="#ForgotPassword" className="pull-right">Forgot Password?</NavLink>
                  </div>
                </form>
                <p className="text-center"><NavLink to="/login">Log in</NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </AlertDismissibleExample>
    );
  }
};

export default CreateAccount;
