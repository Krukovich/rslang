import React, { Component, Children } from 'react';
import Card from '../../Components/Card/Card';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { Header } from '../../Components/Header/Header';

export class AppWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
        this.asideToggle = this.asideToggle.bind(this);
        console.log(props.children)
        this.arrayOfException = [
            '/start'
        ]
    }

    asideToggle() {

        this.setState({ clicked: !this.state.clicked });
    }

    clearLayout () {
        return (
            <div id="content">
                {this.props.children}
            </div>
        )
    }

    HarSbarLayout () {
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


    render() {
        return (
            this.arrayOfException.includes('/start')?
            this.clearLayout():this.HarSbarLayout()
        )
    }
}
