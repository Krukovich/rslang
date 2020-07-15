import React, { Component } from "react";

export class LoginLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <div className="Login">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
