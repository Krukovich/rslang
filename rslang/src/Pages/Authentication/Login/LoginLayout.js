import React, { Component, Suspense } from "react";

export class LoginLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Suspense fallback={<div>Loading...</div>}>
              <div className="Login">{this.props.children}</div>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
