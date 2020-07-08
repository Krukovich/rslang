import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Sidebar } from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import { getCookie } from "../../Components/Tools/GetCoocke";

export class AppWrapperCmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.asideToggle = this.asideToggle.bind(this);
    this.arrayOfException = [
      "/",
      "/createanaccount",
      "/logout",
    ];
  }

  asideToggle() {
    this.setState({ clicked: !this.state.clicked });
  }

  asideCloser = (event) => {
    try {
      if (!event.target.className.includes('aside')) {
        this.setState({ clicked: false });
      }
    } catch {
      if (this.state.clicked) {
        this.setState({ clicked: false });
      }
    }
  }

  clearLayout() {
    return (
      <div id="content">
        {getCookie("userId")}
        {this.props.children}
      </div>
    );
  }

  HarSbarLayout() {
    return (
      <div onClick={this.asideCloser} className="container-fluid">
        <div className="row no-gutters">
          <Sidebar clicked={this.state.clicked} />
          <div className="col-md-12">
            <div className="row no-gutters">
              <Header
                asideToggler={this.asideToggle}
                clicked={this.state.clicked}
              />
            </div>
            <div id="content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.arrayOfException.includes(window.location.pathname)
      ? this.clearLayout()
      : this.HarSbarLayout();
  }
}

export const AppWrapper = withRouter(AppWrapperCmp);
