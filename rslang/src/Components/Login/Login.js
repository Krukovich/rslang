import React from 'react';
import './Login.scss'

const Login = () => {
    
    
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="login-form">
                <div className="Login">
                    <form>
                        <h2 className="text-center">Log in</h2>
                        <div className="form-group">
                            <input type="text" class="form-control" placeholder="Username" required="required"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" class="form-control" placeholder="Password" required="required"></input>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Log in</button>
                        </div>
                        <div className="clearfix">
                            <label className="pull-left checkbox-inline">
                            
                            </label>
                            <a href="#ForgotPassword" className="pull-right">Forgot Password?</a>
                        </div>
                    </form>
                    <p class="text-center"><a href="#CreateAnAccount">Create an Account</a></p>
                </div>                                
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  