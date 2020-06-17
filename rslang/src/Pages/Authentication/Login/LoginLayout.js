import React, { Component } from "react";

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
