import React, { Component } from 'react';
import Button from '../Button/Button';

class Header extends Component {

    asideToggle() {
        const sidebar = document.querySelector('.aside');
        sidebar.classList.toggle('aside_active');
    }

    render() {
        return (
            <header className="header p-2 w-100 bg-info d-flex justify-content-between">
                <div className="header__left w-25 d-flex justify-content-start">
                    <Button
                        title='B'
                        asideToggle={this.asideToggle}
                    />
                </div>
                <div className="header__right w-25 d-flex justify-content-end">
                    <Button
                        title='Log Out'
                    />
                </div>
            </header>
        )
    }
}

export default Header