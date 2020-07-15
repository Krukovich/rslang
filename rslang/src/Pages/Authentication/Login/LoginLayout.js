import React, { Component, Suspense } from "react";
import Spinner from '../../../Components/Spinner/Spinner'

export class LoginLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="Login">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
