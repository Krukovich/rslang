import React, { Component, Suspense } from "react";

export class CreateAccountLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <div className="CreateAccount">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
