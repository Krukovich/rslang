import React from 'react';
import './CreateAccount.scss'

const getInputData = () => {
    const emailInput = document.querySelector('[type="email"]');
    const passwordInput = document.querySelector('[type="password"]');
    return {
        "email": emailInput.value,
        "password": passwordInput.value
    }
};

const loginUser = async () => {
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
  
    console.log(content);
  };

class Login extends React.Component  {

    loginUser(event) {
        console.log(loginUser())
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="registeration-form">
                      <div className="CreateAccount">
                          <form onSubmit={(e) => this.loginUser(e)}>
                              <h2 className="text-center">Sign in</h2>
                              <div className="form-group">
                                  <input  type="email" className="form-control" placeholder="Email" required="required"></input>
                              </div>
                              <div className="form-group">
                                  <input type="password" className="form-control" placeholder="Password" required="required"></input>
                              </div>
                              <div className="form-group">
                                  <button type="submit" className="btn btn-primary btn-block" >Registrater</button>
                              </div>
                              <div className="clearfix">
                                  <label className="pull-left checkbox-inline">
                                  
                                  </label>
                                  <a href="#ForgotPassword" className="pull-right">Forgot Password?</a>
                              </div>
                          </form>
                          <p className="text-center"><a href="#Login">Log in</a></p>
                      </div>                                
                  </div>
                </div>
              </div>
            </div>
          );
    }
  };
  

  export default Login;
  