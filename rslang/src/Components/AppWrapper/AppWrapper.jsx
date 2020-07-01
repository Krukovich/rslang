import React, { Component, Children } from 'react';
import Card from '../../Components/Card/Card';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import Header from '../Header/Header';

export class AppWrapper extends Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
        this.asideToggle = this.asideToggle.bind(this);
        console.log(props.children);
=======
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
>>>>>>> feat: add fetch data and code refactor
    }
    this.asideToggle = this.asideToggle.bind(this);
    console.log(props.children)
  }

<<<<<<< HEAD
    asideToggle() {
        this.setState({ clicked: !this.state.clicked });
    }
=======
  asideToggle() {
    this.setState({ clicked: !this.state.clicked });
  }
>>>>>>> feat: add fetch data and code refactor

    asideCloser = (event) => {
        // alert(event.target.className)
        try {
            if (!event.target.className.includes('aside')) {
                this.setState({ clicked: false });
            }
        } catch {
            if (this.state.clicked) {
                this.setState({ clicked: false });
            }
        }
        // if (this.state.clicked) {
        //     this.setState({ clicked: false });
        // }
    }


<<<<<<< HEAD
    render() {
        return (
            <div onClick={this.asideCloser} className="container-fluid">
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
=======
  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutters">
          <Sidebar clicked={this.state.clicked} />
          <div className="col-md-12">
            <div className="row no-gutters">
              <Header asideToggler={this.asideToggle} clicked={this.state.clicked} />
>>>>>>> feat: add fetch data and code refactor
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
