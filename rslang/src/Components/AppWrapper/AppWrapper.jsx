import React, { Component, Children } from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import { getCookie } from "../../Components/Tools/GetCoocke";

export class AppWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.asideToggle = this.asideToggle.bind(this);
    this.arrayOfException = [
      "/",
      "/login",
      "/createanaccount",
      "/logout",
      "/start",
    ];
  }

  asideToggle() {
    this.setState({ clicked: !this.state.clicked });
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
      <div className="container-fluid">
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
