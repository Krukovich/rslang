import React, { Component, Suspense } from "react";

export class LoginLayout extends Component {
  render() {
    return (
      <div className="container">
<<<<<<< HEAD
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <div className="Login">{this.props.children}</div>
=======
        <div className="row">
          <div className="col-lg-12">
            <Suspense fallback={<div>Loading...</div>}>
              <div className="Login">{this.props.children}</div>
            </Suspense>
>>>>>>> 47f74b8... feat: add full local
          </div>
        </div>
      </div>
    );
  }
}
