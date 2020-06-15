import React from 'react';
import './Login.scss'
import { getInputData } from '../Lib/GetInputData'
import AlertDismissibleExample from '../../Alert/Alert'
import { NavLink } from 'react-router-dom'

class Login extends React.Component {

  state = {
    showAlert: false,
    loginStatus: 'error',
    alertMessage: 'wrong username or password',
  }

  loginUser = async (event) => {
    event.preventDefault();
    console.log(getInputData())
    const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(getInputData())
    });
    const content = await rawResponse.json();

    this.loginResult(content);
    console.log(content);
  };

  loginResult (answer) {
    if (answer.message === 'Authenticated') {
      this.setState({loginStatus: 'correct', alertMessage: 'Hellow User'})
      this.setLoginCookie (answer.userId, answer.token)
    } 
    this.setState({showAlert: true})
  }

  setLoginCookie (userId, token) {
    document.cookie = `userId=${userId}; max-age=14400`;
    document.cookie = `token=${token}; max-age=14400`;
  }

  getCookie (name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  checkCookie () {
    if (this.getCookie('userId')) {
      return true;
    } 
    return false;
  }

  goToMain = () => {
    this.props.history.push({
      pathname: '/main'
    })
  }

  
  render() {
    if (this.checkCookie) {
      return (      
      <AlertDismissibleExample 
      showAlert={this.state.showAlert} 
      onSubmit={this.goToMain}
      HeadText={'Login ' + this.state.loginStatus}
      MainText={this.state.alertMessage}
      >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="login-form">
              <div className="Login">
                <form onSubmit={(event) => this.loginUser(event)}>
                  <h2 className="text-center">Log in</h2>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" required="required"></input>
                  </div>
                  <div className="form-group">
                    <input type="password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" className="form-control" placeholder="Password" required="required"></input>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                  </div>
                  <div className="clearfix">
                    <label className="pull-left checkbox-inline">
                    </label>
                    <NavLink to="#ForgotPassword" className="pull-right">Forgot Password?</NavLink>
                  </div>
                </form>
                <p className="text-center"><NavLink to="/createanaccount">Create an Account</NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </AlertDismissibleExample>
    );
    } else {
      
    }
    
  }

};

export default Login;
