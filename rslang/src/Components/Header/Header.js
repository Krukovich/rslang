import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './Header.scss';

class Header extends Component {

    asideToggle() {
        const sidebar = document.querySelector('.aside');
        const bars = document.querySelector('.btn_aside');

        sidebar.classList.toggle('aside_active');
        bars.classList.toggle('btn_aside_active');
    }

    render() {
        return (
            <header className="Header p-2 w-100 bg-info d-flex justify-content-between">
                <div className="Header-Left w-25 d-flex justify-content-start">
                    <button onClick={this.asideToggle} type="button" className="btn btn_aside btn-primary"><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <div className="Header-Right w-25 d-flex justify-content-end">
                    <button type="button" className="btn btn_logout btn-primary">Log out</button>
                </div>
            </header>
        )
    }
}

export default Header
