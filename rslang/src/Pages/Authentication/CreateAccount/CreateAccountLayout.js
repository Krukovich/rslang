import React, { Component, Suspense } from "react";

export class CreateAccountLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="CreateAccount">
              <Suspense fallback={<div>Loading...</div>}>
                {this.props.children}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
