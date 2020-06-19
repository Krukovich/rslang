import React, { Component } from 'react';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {

    asideToggle() {
        const sidebar = document.querySelector('.aside');
        const bars = document.querySelector('.btn_aside');
        sidebar.classList.toggle('aside_active');
        bars.classList.toggle('btn_aside_active');
    }

    render() {
        return (
            <header className="header p-2 w-100 bg-info d-flex justify-content-between">
                <div className="header__left w-25 d-flex justify-content-start">
                    <Button
                        title={<FontAwesomeIcon icon={faBars} />}
                        class='btn_aside'
                        asideToggle={this.asideToggle}
                    />
                </div>
                <div className="header__right w-25 d-flex justify-content-end">
                    <Button
                        title='Log Out'
                        class='btn_logout'
                    />
                </div>
            </header>
        )
    }
}

export default Header