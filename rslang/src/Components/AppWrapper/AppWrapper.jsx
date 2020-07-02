import React, { Component } from 'react';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import Header from '../Header/Header';

export class AppWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
    this.asideToggle = this.asideToggle.bind(this);
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


  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutters">
          <Sidebar clicked={this.state.clicked} />
          <div className="col-md-12">
            <div className="row no-gutters">
              <Header asideToggler={this.asideToggle} clicked={this.state.clicked} />
            </div>
            <div id="content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
