import React, { Component } from "react";

export class CreateAccountLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="CreateAccount">
                {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
