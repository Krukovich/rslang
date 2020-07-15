import React, { Component, Suspense } from "react";
import Spinner from '../../../Components/Spinner/Spinner'

export class LoginLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <div className="Login">{this.props.children}</div>
            <Suspense fallback={<div><Spinner /></div>}>
              <div className="Login">{this.props.children}</div>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
